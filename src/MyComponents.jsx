import { useEffect } from "react";

function MyComponents() {
  useEffect(() => {
    // Код, который выполняется после рендеринга

    return () => {
      // Код для очистки (опционально, если код отработает быстро или если утечка памяти не является критичной в вашем приложении)
    };
  }, []);
  return <>{/*Компонент */}</>;
}

export default MyComponents;
