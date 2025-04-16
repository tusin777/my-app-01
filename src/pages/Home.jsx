import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <p>Это простое приложение с защищенными маршрутами.</p>
      <Link to="/about">О нас</Link>
      <br />
      <Link to="/contacts">Наши контакты</Link>
      <br />
      <Link to="/login">Выйти</Link>
    </div>
  );
}
