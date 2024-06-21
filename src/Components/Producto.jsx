export default function Producto({ producto }) {
  const nombre = producto.stocked ? (
    producto.name
  ) : (
    <span style={{ color: "red" }}>{producto.name}</span>
  );

  return (
    <>
      <tr>
        <td>{nombre}</td>
        <td>{producto.price}</td>
      </tr>
    </>
  );
}
