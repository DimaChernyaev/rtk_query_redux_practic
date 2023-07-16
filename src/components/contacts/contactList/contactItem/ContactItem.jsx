import ButtonLoader from 'components/loader/ButtonLoader';
import { Contact, ContactText, ButtonDelete } from '../ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectIsDeleteLoading } from 'redux/selectors';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactItem = ({ id, name, number }) => {
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDeleteLoading);

  const handleDeleteContact = async (id, name) => {
    setDeleteId(id);

    await dispatch(deleteContact(id));
    toast.info(`The contact named ${name} has been deleted.`);
  };

  return (
    <>
      <ToastContainer />
      <Contact>
        <FaUserAlt size={18}/>
        <ContactText>
          <p>Name: {name}</p>
          <p>Number: {number}</p>
        </ContactText>
        <ButtonDelete
          type="button"
          onClick={() => handleDeleteContact(id, name)}
        >
          {isLoading && deleteId === id ? <ButtonLoader /> : <FaRegTrashAlt size={16}/>}
        </ButtonDelete>
      </Contact>
    </>
  );
};

export default ContactItem;
