import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

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
  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          // const isExist = contacts.find(
          //   contact => contact.name.toLowerCase() === values.name.toLowerCase()
          // );
          // if (isExist) {
          //   return alert(`${values.name} is already in contacts!`);
          // }
          // dispatch(addContact(values));
          actions.resetForm();
          isClose();
        }}
      >
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <Form>
          <Field name="name" placeholder="Name" type="text" />
          <Field name="email" placeholder="Email" type="email" />
          <Field name="password" placeholder="Password" type="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
