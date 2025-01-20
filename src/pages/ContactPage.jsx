import { Link } from "../router/Link";
import {
  CodePcIcon,
  GitHubIcon,
  LogoIcon,
  SquareLiIcon,
} from "../components/Icons";
import "./ContactPage.css";
export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container contactContainer">
          <h1 className="contactTittle">Hola 🥳</h1>
          <article className="contactDescription">
            <p className="contactProyect">
              Soy Luis Vallejos, tengo 27 años y estoy en pleno proceso de
              convertirme en desarrollador. Este proyecto es un reflejo de todo
              lo que he aprendido hasta ahora y de las ganas que tengo de seguir
              creciendo en este camino. Ha sido un desafío emocionante y, aunque
              todavía me queda mucho por aprender, estoy muy orgulloso de lo que
              logré construir aquí.
            </p>

            <p className="contactCta">
              Si quieres saber más sobre el proyecto, darme feedback, o
              simplemente charlar sobre desarrollo, estaré feliz de conectar
              contigo. ¡Gracias por pasarte por aquí! 😊
            </p>
          </article>
          <div className="contactLinks">
            <a
              className="contactLink --li"
              href="https://www.linkedin.com/in/luisvall" target="_blank"
            >
              <SquareLiIcon className="icon" />
              Mi LinkedIn
            </a>
            <a className="contactLink --gh" href="https://github.com/luisvall" target="_blank">
              <GitHubIcon className="icon" />
              Mi GitHub
            </a>
            <a className="contactLink --pf" href="https://www.luisvall.com/" target="_blank">
              <CodePcIcon className="icon" />
              Mi Portafolio
            </a>
          </div>

          <Link to="/">Link al Home</Link>
        </div>
        <a href=""></a>
      </section>
    </>
  );
}
