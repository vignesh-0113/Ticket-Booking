import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();  
  const [user, setUser] = useState(null);

  const loginUpdate = (userData) => {
    setUser(userData);
    navigate('/EventInfo'); // Redirect to event info on successful login
  };

  const logoutUpdate = () => {
    setUser(null);
    navigate('/login'); // Redirect to login page on logout
  };

  const isAuthenticated = () => {
    return user !== null; // Check if user is authenticated
  };

  return (
    <AuthContext.Provider value={{ user, loginUpdate, logoutUpdate, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
