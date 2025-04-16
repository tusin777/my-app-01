import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Ничего не найдено :(</h1>
      <Link to={"/"}>Главная</Link>
    </div>
  );
}
