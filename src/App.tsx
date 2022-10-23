import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Auth from './components/app/auth/Auth';
import ServiceApp from './components/app/ServiceApp';
import ErrorAuth from './components/app/ErrorAuth';
import Home from './components/Home';

function App() {
  // State для хранения токена и имени
  const [accessToken, setAccessToken] = useState<string>('');
  const [username, setUsername] = useState('');
  
  // Проверка и запись в localStorage переменных 
  if (localStorage.getItem('checked') === undefined) {
    localStorage.setItem('checked', JSON.stringify(''))
  };
  if (localStorage.getItem('accessToken') === undefined) {
    localStorage.setItem('accessToken', JSON.stringify(''))
  };
  if (localStorage.getItem('name') === undefined) {
    localStorage.setItem('name', JSON.stringify(''))
  };

    // Блок проверки прав доступа (включая наличие JWT-токена)   
    useEffect(() => {
      if (accessToken.length === 0) {
        setAccessToken(localStorage.getItem('accessToken') || '');
      }
    }, [setAccessToken, accessToken]);
  
    useEffect(() => {
      if (username.length === 0) {
        setUsername(localStorage.getItem('name') || '');
      }
    }, [setUsername, username]);

  return (
    <div className = "App flex container flex-col h-full w-screen box-border  ">
    <div className = 'flex bg-blue-500 min-h-[8vh] w-screen box-border '>
      <Navigation />
    </div >
    <div className = 'flex min-h-[83vh] w-screen box-border '>
      <Routes>
        <Route path = "/login" element = {
        <Auth 
        accessToken = {accessToken} 
        setAccessToken = {setAccessToken} 
        username = {username} 
        setUsername = {setUsername}/>
         }/>   
                  
        {accessToken.length > 0 ? (<>
          <Route path = "/" element = {<Home/>}/>
         <Route path = "/*" element = {<ServiceApp accessToken={accessToken}/>}/>
         </>
        ) : (
          <Route path = "/*" element = {<ErrorAuth />}/>
        )}   
        
       </Routes>      
    </div>
    <div className="columns-12 h-[8%] bg-blue-500 min-h-[8vh] w-screen box-border  ">
      <Footer />
    </div>
  </div>
);
 
}

export default App;
