import React, {useState} from 'react';
import './LoginPage.css';

function LoginPage({onLogin}) {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userId !== '' && password !== ''){
            onLogin(userId);
            localStorage.setItem("user", userId);
        }else {
            setError("Invalid credentials") ;
        }
    };
    return (
        <div className='loginContainer'>
            <h2>MindShelf Login</h2>
            <form onSubmit = {handleSubmit}>
                <input 
                type = 'text'
                placeholder="User ID"
                value = {userId}
                onChange ={(e) => setUserId(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
                {/* <button type="submit">Sign Up</button> */}
            </form>
        </div>
    );
}

export default LoginPage