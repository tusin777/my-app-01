import { Link } from "react-router";

export default function About() {
  return (
    <div>
      <h1>О нас</h1>
      <Link to="/">На главную</Link>
      <br />
      <Link to="/contacts">Наши контакты</Link>
    </div>
  );
}
