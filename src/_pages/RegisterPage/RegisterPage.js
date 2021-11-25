import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/auth-operations";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        switch (e.target.value) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                alert('Please, check the name!');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, password };
        dispatch(register(user));
        reset();
    };
    const reset = () => {
        setName("");
        setEmail("");
        setPassword("");
}

    return (
        <div>
            <h1>Registration Page</h1>

            <form
                onSubmit={handleSubmit}
                autoComplete="off">
                <label >
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>

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

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterPage;