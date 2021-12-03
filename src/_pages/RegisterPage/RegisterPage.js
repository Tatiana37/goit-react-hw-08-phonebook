import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/auth-operations';
import { toast } from 'react-toastify';
import s from '../RegisterPage/RegisterPage.module.css';
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        toast.error('Please, check the name!');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(register(user));
    toast.success(`${name}, you have registered successfully`);
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1 className={s.title}>Please, Register</h1>
      <div className={s.border}>
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={s.label} htmlFor={name}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={s.label} htmlFor={email}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={s.label} htmlFor={password}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              minLength="8"
              required
            />
          </label>

          <button className={s.btn} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
