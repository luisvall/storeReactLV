
import { Link } from "../router/Link";
import Slider from "../components/Slider"

export default function HomePage() {
  return (
    <>
      <section >
      <Slider></Slider>
        <div className="container">

          <h1>Deléitate con Nuestros Licores</h1>
          <br />
          <p>En nuestro sitio web, encontrarás una selecta variedad de licores que despertarán tus sentidos. Desde la delicadeza del Crema Barceló hasta la intensidad de la Absenta Black, cada opción está cuidadosamente elegida para ofrecerte una experiencia única. Descubre el arte y la pasión detrás de cada botella.</p>
          <br /><br />
          <Link to="/about">Link al About</Link>
          <Link to="/contact">Link al Contacto</Link>
        </div>
      </section>
    </>
  );
}
