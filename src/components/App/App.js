import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import Form from '../Form/Form';
// import FilterSearch from '../FilterSearch/FilterSearch';
// import ContactList from '../ContactList/ContactList';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../_pages/HomePage/HomePage';
import RegisterPage from '../../_pages/RegisterPage/RegisterPage';
import LoginPage from '../../_pages/LoginPage/LoginPage';
import ContactsPage from '../../_pages/ContactsPage/ContactsPage';
import PrivateRoute from '../../_routes/PrivateRoute';
import PublicRoute from '../../_routes/PublicRoute';
import { current } from '../../redux/Auth/auth-operations';
import { getIsAuth } from '../../redux/Auth/auth-selectors';

function App() {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  },[dispatch]);
  
    return (
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" element={<PublicRoute isAuth={isAuth} component={HomePage}/> }/>
          <Route path="/register" element={<PublicRoute isAuth={isAuth} component={RegisterPage} />} />
          <Route path="/login" element={<PublicRoute isAuth={isAuth} component={LoginPage} />} />
          <Route path="/contacts" element={ <PrivateRoute isAuth={isAuth} component={ContactsPage}/>}/>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes> */}
        {/* <h1>Phonebook</h1>
        <Form  />
        <h2>Contacts</h2>
        <FilterSearch />
        <ContactList
        /> */}
      </Container>
    );
  }


export default App;
