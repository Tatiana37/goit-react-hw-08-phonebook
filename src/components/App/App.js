import { Routes, Route } from 'react-router-dom';
import Form from '../Form/Form';
import FilterSearch from '../FilterSearch/FilterSearch';
import ContactList from '../ContactList/ContactList';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../_pages/HomePage/HomePage';
import RegisterPage from '../../_pages/RegisterPage/RegisterPage';
import LoginPage from '../../_pages/LoginPage/LoginPage';
import ContactsPage from '../../_pages/ContactsPage/ContactsPage';
import PrivateRoute from '../../_routes/PrivateRoute';
import PublicRoute from '../../_routes/PublicRoute';

const isAuth = false;
function App() {
  
    return (
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} component={HomePage}/> }/>
          <Route path="/register" element={<PublicRoute isAuth={isAuth} component={RegisterPage} />} />
          <Route path="/login" element={<PublicRoute isAuth={isAuth} component={LoginPage} />} />
          <Route element={ <ContactsPage/>}/>
        </Routes>
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
