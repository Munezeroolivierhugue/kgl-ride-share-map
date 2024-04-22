import "./App.css";
import MyButton from "./components/buttons";

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
      hello world
      <div>
        <MyButton />
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default App;
