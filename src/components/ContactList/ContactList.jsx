import { getContacts } from 'redux/contactsSlice';
import {
  ContactListUl,
  ContactListItem,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListUl>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonDelete onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </ButtonDelete>
        </ContactListItem>
      ))}
    </ContactListUl>
  );
};
