import { Link } from "react-router";

const Contacts = () => {
  return (
    <div>
      <h1>Наши контакты:</h1>
      <p>Адрес: г. Москва, ул. Ленина, д. 100</p>
      <p>Телефон: +7 (123) 456-78-90</p>
      <Link to="/">На главную</Link>
    </div>
  );
};

export default Contacts;
