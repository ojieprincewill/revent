import "./App.css";
import About from "./components/About/about.component";
import GetInTouch from "./components/Get in touch/get-in-touch.component";
import Header from "./components/Header/header.component";

import Navigation from "./components/Navigation/navigation.component";
import Portfolio from "./components/Portfolio/portfolio.component";
import Resume from "./components/Resume/resume.component";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <GetInTouch />
    </>
  );
}

export default App;
