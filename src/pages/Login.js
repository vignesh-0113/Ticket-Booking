import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { motion } from 'framer-motion';        
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export const Login = () => {
    const { loginUpdate } = useAuth();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = () => {
        toast.success('Redirecting to Register Page');
        setTimeout(() => navigate('./register'), 2000);
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/users", { username, password });
            loginUpdate(response.data);
            toast.success('Login Successfully', { position: 'top-center' });
        } catch (error) {
            toast.error('Login Failed: ' + (error.response?.data?.msg || 'Please try again.'), { position: 'top-center' });
        }
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
