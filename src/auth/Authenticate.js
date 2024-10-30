import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();  
  const [user, setUser] = useState(null);

  const loginUpdate = (userData) => {
        console.log('this is called')
        setUser(userData);
        console.log('USER IN CONTEXT',user);
  };

  const logoutUpdate = () => {
        setUser(null);
        navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loginUpdate, logoutUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);