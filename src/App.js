import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Introduction from './Component/Introduction';
import Technique from './Component/Technique';
import Certificate from './Component/Certificate';
import Vision from './Component/Vision';
import Login from './Component/Login/Login';
import LoginHandler from './Component/Login/LoginHandler';
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
    <LoginHandler isLoggedIn={isLoggedIn}/>
      <header>
        <h1>포트폴리오</h1>
      </header>

      <div className="container">
        <nav>
          {isLoggedIn && (
          <div className="nav-container">
            <NavLink to="/introduction" activeClassName="active" className="nav-link">나의 소개</NavLink>
            <NavLink to="/technique" activeClassName="active" className="nav-link">기술</NavLink>
            <NavLink to="/certificate" activeClassName="active" className="nav-link">자격증</NavLink>
            <NavLink to="/vision" activeClassName="active" className="nav-link">직업 목표</NavLink>
            <NavLink onClick={handleLogout} activeClassName="hover" className="nav-link">로그아웃</NavLink>
            </div>
        
          )}

          {!isLoggedIn && (
            <NavLink to="/login">로그인</NavLink>
          )}
          
        </nav>
        <main>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/technique" element={<Technique />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/vision" element={<Vision />} />
              </>
            ) : (
              <Route path="/login" element={
                <Login
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                />
              } />
            )}
          </Routes>
        </main>
      </div>
      <footer className="footer">
  <div className="footer-content">
    <h3>한건희의 포트폴리오</h3>
    <p>열정적인 백앤드</p>
    <div className="footer-contact">
      <p>연락처: 010-5211-1901 | fldzjs807@naver.com</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2023 한건희. All rights reserved.</p>
  </div>
</footer>
    </BrowserRouter>
  );
}

export default App;
