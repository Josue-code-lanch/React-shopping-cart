import { useState } from "react";
import BuscarProductos from "./BuscarProductos";
import Carrito from "./Carrito";
import ListaDeProductos from "./ListaDeProductos";

export default function FiltrarProductos({ productos }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <header className="header-container">
        <BuscarProductos
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <Carrito cartItems={productos} />
      </header>
      <ListaDeProductos
        productos={productos}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}
