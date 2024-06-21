import BuscarProductos from "./BuscarProductos";
import Carrito from "./Carrito";
import ListaDeProductos from "./ListaDeProductos";

export default function FiltrarProductos({ productos }) {
  return (
    <>
      <header className="header-container">
        <BuscarProductos />
        <Carrito cartItems={productos} />
      </header>
      <ListaDeProductos productos={productos} />
    </>
  );
}
