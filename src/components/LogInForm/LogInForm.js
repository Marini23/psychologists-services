import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

const formSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export const LofInForm = ({ isClose }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
      <Form>
        <Field name="email" placeholder="Email" type="email" />
        <Field name="password" placeholder="Password" type="password" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
