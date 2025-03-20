import { useEffect, useState } from "react";

const App = () => {
  const key = "name";
  const initialValue = "Гость";

  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка чтения данных из localStorage", error);
      return initialValue;
    }
  };
  const [name, setName] = useState(getStoredValue());

  const handleSetName = (newName) => {
    try {
      setName(newName);
      localStorage.setItem(key, JSON.stringify(newName));
    } catch (error) {
      console.error("Ошибка добавления в localStorage", error);
    }
  };

  const handleRemoveName = () => {
    try {
      setName(initialValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Ошибка удаления из localStorage", error);
    }
  };

  useEffect(() => {
    setName(getStoredValue());
  }, [key]);

  return (
    <div>
      <h1>Привет, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => handleSetName(e.target.value)}
        placeholder="Введите ваше имя"
      />
      <button onClick={handleRemoveName}>Очистить имя</button>
    </div>
  );
};

export default App;
