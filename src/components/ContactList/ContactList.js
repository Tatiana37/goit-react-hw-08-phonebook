import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { deleteContact } from '../../redux/Contacts/contacts-operations';
import { fetchContacts } from '../../redux/Contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/Contacts/contacts-selectors';


function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  const contacts = useSelector(getVisibleContacts);
  
  return (
    <ul>
      {contacts && contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} />
          <button
            className={s.contactBtn}
            type="button"
            onClick={()=> dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


export default ContactList;