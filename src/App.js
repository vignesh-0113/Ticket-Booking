import React from 'react';
import { HashRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import { EventInfo } from './pages/EventInfo';
import { Login } from './pages/Login';
import { AuthProvider } from './auth/Authenticate'; 
import { TicketBooking } from './pages/TicketBooking';
import { Register } from './pages/Register';

function App () {

  
  return (
    <HashRouter>
    <AuthProvider>
      <Navbar />      
      <Routes>
        <Route path="//" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/eventinfo" element={<EventInfo/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
      </Routes>
    </AuthProvider>
    </HashRouter>
  );
};

export default App;
