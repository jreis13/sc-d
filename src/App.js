import "./App.scss";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Sidepanel from "./components/Sidepanel";
import Pages from "./components/Pages";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="top-elements">
        <Profile />
        <Sidepanel />
      </div>
      <div className="bot-elements">
        <About />
        <Pages />
      </div>
      <Contact />
    </div>
  );
}

export default App;
