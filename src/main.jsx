import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { DataFetcher } from "./DataFetcher";
import App from "./App";
import Cleanup from "./Cleanup";
import WindowSize from "./WindowSize";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DataFetcher /> */}
    {/* <App /> */}
    <Cleanup />
    {/* <WindowSize /> */}
  </StrictMode>
);
