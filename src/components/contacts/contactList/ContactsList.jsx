import { ContactList } from './ContactList.styled';
import ContactItem from './contactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisableContacts } from 'redux/selectors';

const ContactsList = () => {

  const visableContacts = useSelector(selectVisableContacts);

  return (
    <ContactList>
      {visableContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactList>
  );
};

export default ContactsList;
