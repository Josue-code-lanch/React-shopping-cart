import "../Styles/Categorias.css";

export default function CategoriaDeProductos({ categoria }) {
  return (
    <>
      <tr className="categoria-container">
        <th className="categoria">{categoria}</th>
      </tr>
    </>
  );
}
