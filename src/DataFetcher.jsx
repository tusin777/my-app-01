import { useState, useEffect } from "react";

export function DataFetcher() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </>
  );
}
