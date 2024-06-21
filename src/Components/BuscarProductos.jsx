import "../Styles/BuscarProductos.css";

export default function BuscarProductos() {
  return (
    <section className="search-products">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar productos..."
      />
      <div className="inStock">
        <input type="checkbox" />
        <label className="search-label">
          Mostrar solo los productos en stock
        </label>
      </div>
    </section>
  );
}
