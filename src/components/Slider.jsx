import './Slider.css'
import { consumoApi } from './api'
export default function Slider () {
    const carrousel = consumoApi()[2]
    console.log(carrousel)
    return(
        <div className="slider">
            {carrousel.map(img => (
                <div className='sliderImg'><img src={img.imagen} alt={img.titulo} key={img.titulo}/><span>{img.titulo}</span></div>
            ))}
            <span className='sliderSpan'>Loadin...</span>
        </div>
        
    )
}