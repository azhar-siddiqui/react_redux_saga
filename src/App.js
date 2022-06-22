import "./App.css";
import { AddToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const data = {
    name: "iPhone 14",
    type: "Mobile",
    Price: 40000,
    color: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(AddToCart(data))}>Add To cart</button>
    </div>
  );
}

export default App;
