import { useEffect, useState } from "react";

export default function Cleanup() {
  const [message, setMessage] = useState("Hello, World!");
  
  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [message]);

  return (
    <div>
      <h3>Напечатайте, чтобы вывести в консоль</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>В консоль выводится {message}</div>
    </div>
  );
}
