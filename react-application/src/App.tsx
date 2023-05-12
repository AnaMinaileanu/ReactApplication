import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/root/Main';
import { Login } from './components/open-id-connect/Login';
import { Logout } from './components/open-id-connect/Logout';
import PrivateRoute from './components/shared/privateRoute';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
