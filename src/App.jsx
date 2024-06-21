import FiltrarProductos from "./Components/FiltrarProductos";
import PRODUCTOS from "./Productos";
import "./App.css";

function App() {
  return (
    <>
      <FiltrarProductos productos={PRODUCTOS} />
    </>
  );
}

export default App;
