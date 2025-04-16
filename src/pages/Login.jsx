import { useNavigate } from "react-router";

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    setIsAuth(true);
    navigate('/contacts')
  };

  const handleLogout = () => {
    setIsAuth(false);
    navigate('/')
  };

  return (
    <div>
      <h1>Страница логина, войти?</h1>
      <button onClick={handleLogin}>Авторизоваться</button>
      <button onClick={handleLogout}>Выйти</button>

    </div>
  );
}
