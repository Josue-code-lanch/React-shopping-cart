import "../Styles/BuscarProductos.css";

export default function BuscarProductos({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <section className="search-products">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar productos..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <div className="inStock">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <label className="search-label">
          Mostrar solo los productos en stock
        </label>
      </div>
    </section>
  );
}
