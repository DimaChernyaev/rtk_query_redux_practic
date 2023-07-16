import ContactsList from '../contactList/ContactsList';
import Filter from '../filter/Filter';
import { Container, NullContactsMessage } from './contactsContainer.styled';
import { useSelector } from 'react-redux';
import {
  selectContactsItems,
  selectError,
  selectIsAllLoading,
} from 'redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import Loader from 'components/loader/Loader';
import { constMessage } from 'components/helpers/constMessage';
import ErrorMessage from 'components/errorMessage/ErrorMessage';

const ContactsContainer = () => {
  const contacts = useSelector(selectContactsItems);
  const isLoading = useSelector(selectIsAllLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Filter />
      {isLoading && <Loader />}
      {isError && <ErrorMessage>{constMessage.errorFetch}</ErrorMessage>}
      {contacts.length > 0 && !isError ? (
        <ContactsList />
      ) : (
        <>
          {!isLoading &&
            !isError && (
              <NullContactsMessage>
                {constMessage.emptyList}
              </NullContactsMessage>
            )}
        </>
      )}
    </Container>
  );
};

export default ContactsContainer;
