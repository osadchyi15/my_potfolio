import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <AboutMe />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
