import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../auth/Authenticate';
import { motion } from 'framer-motion';        
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Data from './db.json';

export const Login = () => {
    const { loginUpdate } = useAuth();
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();
        
        const user = Data.users.find(user => user.username === username && user.password === password);
        
        if (user) {
            loginUpdate(user);
            toast.success('Login successful!');
        } else {
            toast.error('Invalid username or password!');
        }
    };

    const register = async () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <ToastContainer />
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Login
            </motion.h1>
            <motion.div
                className="product"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <form className="login-form" onSubmit={onFormSubmit}>
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
                    <button className="loginbutton" type="submit">Login</button>
                    <label>Create an account: <Link onClick={register}>Register here</Link></label>
                </form>
            </motion.div>
        </div>
    );
};
