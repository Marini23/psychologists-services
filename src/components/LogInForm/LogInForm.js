import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  PasswordContainer,
  Text,
  Title,
} from './LogInForm.styled';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authSlice/authOperations';

const formSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const LogInForm = ({ isClose }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        dispatch(logIn(values));
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
        <Title>Log In</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </Text>
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
        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
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
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
