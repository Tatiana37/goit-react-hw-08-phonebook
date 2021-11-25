    import { useState } from "react";
    import { useDispatch } from "react-redux";
    import { logIn } from "../../redux/Auth/auth-operations";

    const LoginPage = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();
        const handleChange = (e) => {
            switch (e.target.value) {
            
                case "email":
                    setEmail(e.target.value);
                    break;
                case "password":
                    setPassword(e.target.value);
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
            <div>
                <h1>Login Page</h1>

                <form
                    onSubmit={handleSubmit}
                    autoComplete="off">

                    <label >
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </label>

                    <label >
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }


export default LoginPage;