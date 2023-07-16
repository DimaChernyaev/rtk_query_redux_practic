import {
  Button,
  ContactForm,
  Label,
  Input,
  InputTitle,
  ValidationError,
} from './Form.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { repeatName } from 'components/helpers/repeatName';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddContactsMutation, useGetContactsQuery } from 'redux/operation';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Name is a required field! Please, fill the field'),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is a required field! Please, fill the field'),
});

const Form = () => {
  const { data } = useGetContactsQuery();
  const [addNewContact] = useAddContactsMutation();

  const initialValues = {
    name: '',
    number: '',
  };

  async function submitForm(values, { resetForm }) {
    const repeatContactNeme = repeatName(data, values.name);

    if (repeatContactNeme) {
      toast.warn(`Sorry, but you already have ${values.name} in your contacts`);
      resetForm();
      return;
    }

    await addNewContact(values);
    toast.success(`Contact named ${values.name} has been add.`);

    resetForm();
  }

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        <ContactForm>
          <Label>
            <InputTitle>Name</InputTitle>
            <Input type="text" name="name" />
            <ErrorMessage name="name" component={ValidationError} />
          </Label>
          <Label>
            <InputTitle>Number</InputTitle>
            <Input type="tel" name="number" />
            <ErrorMessage name="number" component={ValidationError} />
          </Label>
          <Button type="submit">Add contact</Button>
        </ContactForm>
      </Formik>
    </>
  );
};

export default Form;
