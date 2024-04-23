import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <div>
      <Header/>
      hello world
      <div>
        <ul className="text-orange-500 bg-green-200">{listItems}</ul>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
