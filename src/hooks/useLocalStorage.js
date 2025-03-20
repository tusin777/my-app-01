export const useLocalStorage = (key, initialValue) => {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка чтения данных из localStorage", error);
      return initialValue;
    }
  };

  const [storedValue, setName] = useState(getStoredValue());

  return [storedValue, setValue, removeValue];
};
