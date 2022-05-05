import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import {
  Route,
  Routes,
} from "react-router-dom";
import Character from './pages/Character';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './pages/LogoutButton';
import LoginButton from './pages/LoginButton';

function App() {
  console.log("inside App component");
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated && user !== undefined ?(
    <div>
      <Routes>
        <Route   path="/"  element={<CharactersList/>}/>
        <Route   path="/:id" element={<Character/>}/>

      </Routes>
      <LogoutButton />

   </div>
  ):(<><LoginButton/>
     <LogoutButton /></>);
}

export default App;
