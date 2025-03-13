import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataFetcher } from "./DataFetcher";
import { Counter } from "./Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DataFetcher /> */}
    <Counter />
  </StrictMode>
);
