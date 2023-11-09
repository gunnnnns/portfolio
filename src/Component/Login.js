import React from 'react';

const Login = ({ username, password, setUsername, setPassword, handleLogin }) => {
  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">사용자 이름:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
