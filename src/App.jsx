import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Contacts from "./pages/Contacts";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />

        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={"/about"} element={<About />} />
          <Route path={"/contacts"} element={<Contacts />} />
        </Route>

        <Route path={"/login"} element={<Login setIsAuth={setIsAuth} />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
