import Form from '../../components/Form/Form';
import FilterSearch from '../../components/FilterSearch/FilterSearch';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/Contacts/contacts-operations';


const ContactsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        <div>
            <h1>Phonebook</h1>
        <Form  />
        <h2>Contacts</h2>
        <FilterSearch />
        <ContactList
        />
        </div>
    )
}

export default ContactsPage;