import CategoriaDeProductos from "./CategoriaDeProductos";
import Producto from "./Producto";
import "../Styles/Listado.css";

export default function ListaDeProductos({ productos }) {
  const filas = [];
  let ultimaCategoria = null;

  productos.forEach((producto) => {
    if (producto.category !== ultimaCategoria) {
      filas.push(
        <CategoriaDeProductos
          categoria={producto.category}
          key={producto.category}
        />
      );
    }
    filas.push(<Producto producto={producto} key={producto.id} />);
    ultimaCategoria = producto.category;
  });

  return (
    <section className="section-listado">
      <table>
        <thead className="section-listado-header">
          <tr>
            {/* <th>Nombre</th>
            <th>Precio</th> */}
          </tr>
        </thead>
        <tbody className="section-listado-body">{filas}</tbody>
      </table>
    </section>
  );
}
