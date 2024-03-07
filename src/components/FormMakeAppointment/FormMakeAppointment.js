import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ContainerInfo,
  ContainerName,
  ErrorMessage,
  Form,
  Img,
  Input,
  InputComment,
  InputTime,
  NameText,
  NameTitle,
  TelTimeContainer,
  Text,
  Title,
} from './FormMakeAppointment.styled';

const phoneRegExp = /^\+(?:[0-9]●?){6,14}[0-9]$/;
const timeRegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const formSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  time: Yup.string()
    .matches(timeRegExp, 'Time must be in the format "HH:MM"')
    .required('Time is required'),
  email: Yup.string().email().required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

export const FormMakeAppointment = ({ selectedPsychologist, isClose }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      time: '00:00',
      email: '',
      comment: '',
    },
    validationSchema: formSchema,
    onSubmit: values => {
      if (formik.isValid) {
        alert('An appointment is scheduled successfully');
        isClose();
        formik.resetForm();
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Title>Make an appointment with a psychologists</Title>
        <Text>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </Text>
        <ContainerInfo>
          <Img
            src={selectedPsychologist.avatar_url}
            alt={selectedPsychologist.name}
            height={44}
            width={44}
          />
          <ContainerName>
            <NameText>Your psychologists</NameText>
            <NameTitle>{selectedPsychologist.name}</NameTitle>
          </ContainerName>
        </ContainerInfo>
        <Input
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
        <TelTimeContainer>
          <Input
            name="tel"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tel}
            placeholder="+380"
            autoComplete="off"
          />
          <InputTime
            name="time"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          />
        </TelTimeContainer>
        {formik.touched.tel && formik.errors.tel ? (
          <ErrorMessage>{formik.errors.tel}</ErrorMessage>
        ) : null}
        {formik.touched.time && formik.errors.time ? (
          <ErrorMessage>{formik.errors.time}</ErrorMessage>
        ) : null}
        <Input
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
        <InputComment
          name="comment"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
          placeholder="Comment"
          autoComplete="off"
        />
        {formik.touched.comment && formik.errors.comment ? (
          <ErrorMessage>{formik.errors.comment}</ErrorMessage>
        ) : null}
        <Button type="submit">Send</Button>
      </Form>
    </>
  );
};
