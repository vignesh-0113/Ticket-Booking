import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import { EventInfo } from './pages/EventInfo';
import { Login } from './pages/Login';
import { AuthProvider } from './auth/Authenticate'; 
import { TicketBooking } from './pages/TicketBooking';

function App () {

  
  return (
    <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/eventinfo" element={<EventInfo/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Login/>} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
