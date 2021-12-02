    import { useState } from "react";
    import { useDispatch } from "react-redux";
    import { logIn } from "../../redux/Auth/auth-operations";
import s from '../LoginPage/LoginPage.module.css';

    const LoginPage = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();
        const handleChange = ({target: {name, value}}) => {
            switch (name) {
            
                case "email":
                    setEmail(value);
                    break;
                case "password":
                    setPassword(value);
                    break;
                default:
                    alert('Please, check the password!');
            }
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            const user = {  email, password };
            dispatch(logIn(user));
            reset();
        };
        const reset = () => {
            setEmail("");
            setPassword("");
        }

        return (
            <>
                <h1 className={s.title}>Please, Log In</h1>
                <div className={s.border}>
                    <form
                        className={s.form}
                    onSubmit={handleSubmit}
                    autoComplete="off">

                        <label
                            className={s.label}
                            htmlFor={email}
                        >
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

                        <label
                            className={s.label}
                            htmlFor={password}
                        >
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

                        <button className={s.btn} type="submit">Log In</button>
                </form>
                </div>
            </>
        )
    }


export default LoginPage;