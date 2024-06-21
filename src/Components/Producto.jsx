import "../Styles/Producto.css";

export default function Producto({ producto }) {
  const nombre = producto.stocked ? (
    producto.name
  ) : (
    <span style={{ color: "red" }}>{producto.name}</span>
  );
  const precio = producto.stocked ? (
    producto.price
  ) : (
    <span style={{ color: "red" }}>--</span>
  );
  const descripcion = producto.stocked ? (
    producto.description
  ) : (
    <span style={{ color: "red", textAlign: "center" }}>--</span>
  );

  return (
    <>
      <tr>
        <td className="producto-info">
          <img
            className="producto-image"
            src={producto.image}
            alt={producto.name}
          />
          <div>
            <span>{nombre}</span>
            <span>{precio}</span>
          </div>
          <p className="description">{descripcion}</p>
        </td>
      </tr>
    </>
  );
}
