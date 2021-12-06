import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../_pages/HomePage/HomePage';
import RegisterPage from '../../_pages/RegisterPage/RegisterPage';
import LoginPage from '../../_pages/LoginPage/LoginPage';
import ContactsPage from '../../_pages/ContactsPage/ContactsPage';
import PrivateRoute from '../../_routes/PrivateRoute';
import PublicRoute from '../../_routes/PublicRoute';
import { current } from '../../redux/Auth/auth-operations';
import {
  getIsAuth,
  getIsFetchingCurrent,
} from '../../redux/Auth/auth-selectors';
import Loader from '../Loader/Loader';

function App() {
  const isAuth = useSelector(getIsAuth);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Routes>
            <Route path="/" element={<PublicRoute component={HomePage} />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute isAuth={isAuth} component={ContactsPage} />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  isAuth={isAuth}
                  component={RegisterPage}
                  restricted
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute isAuth={isAuth} component={LoginPage} restricted />
              }
            />
          </Routes>
        </>
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;
