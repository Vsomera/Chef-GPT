import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [usernameError, setUsernameError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        // Validate username
        const usernamePattern = /^[a-zA-Z0-9]{5,15}$/;
        if (!usernamePattern.test(formData.username)) {
            setUsernameError("Username should be alphanumeric and between 5 to 15 characters.");
            return;
        }

        // ...rest of the registration logic (like making an API call)
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <input 
                    className="register-input" 
                    type="text" 
                    placeholder="Username"
                    pattern="^[a-zA-Z0-9]{5,15}$" 
                    title="Username should be alphanumeric and between 5 to 15 characters."
                    value={formData.username}
                    onChange={(e) => setFormData(prevState => ({ ...prevState, username: e.target.value }))}
                />
                <input 
                    className="register-input" 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData(prevState => ({ ...prevState, email: e.target.value }))}
                />
                <input 
                    className="register-input" 
                    type="password" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={(e) => setFormData(prevState => ({ ...prevState, password: e.target.value }))}
                />
                <input 
                    className="register-input" 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prevState => ({ ...prevState, confirmPassword: e.target.value }))}
                />
                <button className="register-button" type="submit">Register</button>
            </form>
            {
                usernameError && <p className="error-message">{usernameError}</p>
            }
        </div>
    );
}

export default Register;
