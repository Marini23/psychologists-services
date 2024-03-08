import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  PasswordContainer,
  Text,
  Title,
} from './RegisterForm.styled';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authSlice/authOperations';

const nameRegex = /[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegex, {
      message: `Name may contain only letters, apostrophe, dash and spaces.`,
    })
    .required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const RegisterForm = ({ isClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        dispatch(register(values))
          .unwrap()
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              toast.error(
                'Email is already in use. Please use a different email.'
              );
            } else {
              toast.error('Something went wrong. Try again later');
            }
          });
        isClose();
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Registration</Title>
        <Text>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </Text>
        <Input
          id="nameame"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Name"
          autoComplete="off"
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <PasswordContainer>
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            autoComplete="off"
          />
          {showPassword ? (
            <FiEye
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '18px',
                right: '18px',
              }}
              size="20px"
              color="black"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FiEyeOff
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '18px',
                right: '18px',
              }}
              size="20px"
              color="black"
              onClick={togglePasswordVisibility}
            />
          )}
        </PasswordContainer>
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        ) : null}
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
};
