import CategoriaDeProductos from "./CategoriaDeProductos";
import Producto from "./Producto";

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
    <section>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>{filas}</tbody>
      </table>
    </section>
  );
}
