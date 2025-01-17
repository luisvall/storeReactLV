import { navegateFunction, Link } from "../router/Link";
export default function ContactPage () {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>Contact sobre Luisvall</h1>
          <p>Este es un about sobre Luisvall, </p>
          <a href="/">Ir a la home con anchor vanilla</a>
          <br />
          <br />
          <button
            onClick={() => {
              navegateFunction("/");
            }}
          >
            navegar
          </button>{" "}
          <br />
          <br />
          <Link to="/">Link al Home</Link>
          <Link to="/about"> Link al About</Link>
        </div>
      </section>
    </>
  );
}
