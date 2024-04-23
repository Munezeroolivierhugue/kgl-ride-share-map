import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Details/>
        <Map/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
