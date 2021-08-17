import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testemonial/testemonial";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Portfolio />

        {/* <Testimonial /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
