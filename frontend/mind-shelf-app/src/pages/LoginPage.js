import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userId !== '' && password !== '') {
            localStorage.setItem("user", userId);
            navigate('/home');
        } else {
            setError("Invalid credentials");
        }
    };
    return (
        <div className='loginContainer'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit" onClick={handleSubmit} >Login</button>
                {/* <button type="submit">Sign Up</button> */}
            </form>
        </div>
    );
}

export default LoginPage