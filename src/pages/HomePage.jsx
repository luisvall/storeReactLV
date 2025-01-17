import { navegateFunction, Link } from "../router/Link";
export default function HomePage(otherProps) {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>Home Page</h1>
          <p>esta es una página de jemplo para crear un reactRouter</p>
          <a href="about">Ir al about con anchor vanilla</a>
          <br />
          <br />
          <button
            onClick={() => {navegateFunction("/about");}}>
            navegar
          </button>
          <br />
          <br />
          <Link to="/about">Link al About</Link>
          <Link to="/contact"> Link al Contacto</Link>
        </div>
      </section>
    </>
  );
}
