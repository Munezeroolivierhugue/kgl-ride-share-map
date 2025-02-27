import Header from "./components/Header";
import Footer from "./components/Footer";
import MapComponent from "./components/Map";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Details/>
        <MapComponent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
