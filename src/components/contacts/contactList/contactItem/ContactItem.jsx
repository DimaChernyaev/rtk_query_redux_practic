import ButtonLoader from 'components/loader/ButtonLoader';
import { Contact, ContactText, ButtonDelete } from '../ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDeleteContactsMutation } from 'redux/operation';

const ContactItem = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactsMutation();

  const handleDeleteContact = async (id, name) => {
    try {
      await deleteContacts(id);
      toast.info(`The contact named ${name} has been deleted.`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Contact>
        <FaUserAlt size={18} />
        <ContactText>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </ContactText>
        <ButtonDelete
          type="button"
          disabled={isLoading}
          onClick={() => {
            handleDeleteContact(id, name);
          }}
        >
          {isLoading ? <ButtonLoader /> : <FaRegTrashAlt size={16} />}
        </ButtonDelete>
      </Contact>
    </>
  );
};

export default ContactItem;
