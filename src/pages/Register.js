import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Data from './db.json'; 

export const Register = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        
        const newUser = { username, password };
        Data.users.push(newUser); 
        
        toast.success('Registration successful! You can now log in.');
        navigate('/login');
    };

    return (
        <div>
            <ToastContainer />
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
