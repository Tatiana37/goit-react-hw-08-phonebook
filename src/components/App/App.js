import Form from '../Form/Form';
import FilterSearch from '../FilterSearch/FilterSearch';
import ContactList from '../ContactList/ContactList';
import Container from '../Container/Container';


function App() {
  
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form  />
        <h2>Contacts</h2>
        <FilterSearch />
        <ContactList
        />
      </Container>
    );
  }


export default App;
