import Header from "../Header/Header";
import HomePage from "../../pages/HomePage";
import { Footer } from "../Footer/Footer";
import Counter from "../Counter";
import UserProfile from "../UserProfile";
import ParentComponent from "../ParentComponent";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Header />
      <HomePage />
      <Counter />
      <UserProfile />
      <ParentComponent />
      <Footer />
    </main>
  );
}

export default App;
