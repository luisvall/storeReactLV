
import { Link } from "../router/Link";
import Slider from "../components/Slider"
import "./HomePage.css"

export default function HomePage() {
  return (
    <>
      <section className="section sectionHome" >
      <Slider></Slider>
        <div className="container containerHome">

          <h1>Deléitate con Nuestros Licores</h1>
          <br />
          <p>En nuestro sitio web, encontrarás una selecta variedad de licores que despertarán tus sentidos. Cada opción está cuidadosamente elegida para ofrecerte una experiencia única. Descubre el arte y la pasión detrás de cada botella.</p>
          <br /><br />
          <Link to="/login">Iniciar seion para ver los productos</Link>
        </div>
      </section>
    </>
  );
}
