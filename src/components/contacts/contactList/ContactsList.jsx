import { ContactList } from './ContactList.styled';
import ContactItem from './contactItem/ContactItem';
import { useGetContactsQuery } from 'redux/operation';
// import { filterVisableList } from 'components/helpers/filterVisableContacts';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const visableContacts = useMemo(() => {
    return data.filter(contact => contact.name.toLowerCase().includes(filter));
  }, [data, filter]);

  return (
    <ContactList>
      {visableContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactList>
  );
};

export default ContactsList;
