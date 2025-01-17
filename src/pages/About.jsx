import { navegateFunction, Link } from "../router/Link"
function About() {

  return (
    <>
      <h1 >About sobre Luisvall</h1>
    <p>Este es un about sobre Luisvall, </p>
    <a href="/">Ir a la home con anchor vanilla</a><br /><br />
    <button onClick={()=>{navegateFunction('/')}} >navegar</button> <br /><br />
    <Link to='/' >Link al Home</Link>
    <Link to='/contact' > Link al Contacto</Link>
    </>
  )
}
export default About