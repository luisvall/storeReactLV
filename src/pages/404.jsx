import { Link } from "../router/Link";
export default function DefaultComponent() {
  return (
    <>
      <section className="section">
        <h1>404</h1>
        <h2>Pagina no encontrada</h2>
        <Link to={"/"}>Volver a la home</Link>
      </section>
    </>
  );
}
