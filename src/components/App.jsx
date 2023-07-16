import ContactsContainer from './contacts/contactsContainer/contactsContainer';
import Form from './contacts/form/Form';
import { Container, TitleContactList, TitlePhonebook } from './App.styled';

const App = () => {

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Form />

      <TitleContactList>Contacts</TitleContactList>
      <ContactsContainer />
    </Container>
  );
};


export default App;
