import './Slider.css'
import { consumoApi } from './api'
export default function Slider () {
    const carrousel = consumoApi()[2]
    console.log(carrousel)
    return(
        <div className="slider">
            {carrousel.map(img => (
                <img className='sliderImg' src={img.imagen} alt={img.titulo} key={img.titulo}/>
            ))}
            <span className='sliderSpan'>Loadin...</span>
        </div>
        
    )
}