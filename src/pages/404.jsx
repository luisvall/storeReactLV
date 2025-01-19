import { Link } from "../router/Link";
export default function DefaultComponent() {
  return (
    <>
      <section className="section">
        <div className="container">
        <h2>Necesitas iniciar sesión para ver los productos</h2>
        <p>usuario: elfar@edutecno.com, contraseña: 123</p>
        <Link to={"/login"}>ir al login</Link>
        </div>
      </section>
    </>
  );
}
