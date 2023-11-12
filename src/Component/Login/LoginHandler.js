import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginHandler = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return null; // UI를 렌더링하지 않습니다.
};

export default LoginHandler;
