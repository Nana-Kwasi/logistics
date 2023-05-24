import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../Component/ProtectedRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProtectedRoute />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default Router;