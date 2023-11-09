import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Introduction from './Component/Introduction';
import Technique from './Component/Technique';
import Certificate from './Component/Certificate';
import Vision from './Component/Vision';
import Login from './Component/Login';
import './App.css'; 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  const handleLogin = () => {
    const user = loginUser(username, password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true);
      setUsername(user.username);
    } else {
      alert('로그인 실패. 사용자 이름 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const loginUser = (username, password) => {
    if (username === 'user1' && password === 'password1') {
      return { username: 'user1', name: '사용자1' };
    } else {
      return null;
    }
  };

  return (
    <BrowserRouter>
      <header>
        <h1>포트폴리오</h1>
      </header>

      <div className="container">
        <nav>
          <NavLink to="/introduction" activeClassName="active">
            나의 소개
          </NavLink>
          <NavLink to="/technique" activeClassName="active">
            기술
          </NavLink>
          <NavLink to="/certificate" activeClassName="active">
            자격증
          </NavLink>
          <NavLink to="/vision" activeClassName="active">
            직업 목표
          </NavLink>
        
          {isLoggedIn ? (
            <NavLink onClick={handleLogout}activeClassName="active">
              로그아웃
            </NavLink>
          
          ) : (
            <NavLink to="/login" >
              로그인
            </NavLink>
          )}
        </nav>
        <main>
          {isLoggedIn ? (
            <Routes>
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/technique" element={<Technique />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/vision" element={<Vision />} />
            </Routes>
          ) : (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
            />
          )}
        </main>
      </div>
      <footer>
        <i>
          Copyright 2023. 지은이 all rights reserved.
          <br />
          연락처 : 010-8906-3946
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App
