import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import './Register.css';
import axios from 'axios';

export const Register = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            toast.error('Passwords do not match', { position: 'top-center' });
            return;
        }
        try {
            await axios.post("http://localhost:3001/users/register", { username, password });
            toast.success('Registration successful! Redirecting to login...', { position: 'top-center' });
            setTimeout(() => navigate('/login'), 2000);
        } catch (error) {
            toast.error('Registration failed: ' + (error.response?.data?.msg || 'Please try again.'), { position: 'top-center' });
        }
    };

    return (
        <div className="register-container">
            <ToastContainer />
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Register
            </motion.h1>
            <motion.div
                className="reg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <form className="reg-form" onSubmit={onFormSubmit}>
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
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={cpassword}
                        onChange={(e) => setCPassword(e.target.value)}
                        required 
                    />
                    <button className="regbutton" type="submit">Register</button>
                </form>
            </motion.div>
        </div>
    );
}
