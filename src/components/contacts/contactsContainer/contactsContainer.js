import ContactsList from '../contactList/ContactsList';
import Filter from '../filter/Filter';
import { Container, NullContactsMessage } from './contactsContainer.styled';
import Loader from 'components/loader/Loader';
import { constMessage } from 'components/helpers/constMessage';
import ErrorMessage from 'components/errorMessage/ErrorMessage';
import { useGetContactsQuery } from 'redux/operation';

const ContactsContainer = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <Container>
      <Filter />
      {isLoading && <Loader />}
      {error && <ErrorMessage>{constMessage.errorFetch}</ErrorMessage>}
      {data?.length > 0 && !error ? (
        <ContactsList />
      ) : (
        <>
          {!isLoading && !error && (
            <NullContactsMessage>{constMessage.emptyList}</NullContactsMessage>
          )}
        </>
      )}
    </Container>
  );
};

export default ContactsContainer;
