import './gallery.css'
import Footer from './footer.jsx'
import { Link } from 'react-router-dom';
const MediaGallery = () => {
    const afterview = [
        {
            imagen: 'moonlight.png',
            titulo: 'moonlight'
        },
        {
            imagen: 'joker.png',
            titulo: 'Joker'
        },
    ];

    const galeria = [
        {
            imagen: 'jujutsu.png',
            titulo: 'Jujutsu No Kaisen'
        },
        {
            imagen: 'leveling.png',
            titulo: 'Solo Leveling'
        },
        {
            imagen: 'bleach.png',
            titulo: 'Bleach'
        },
        {
            imagen: 'away.png',
            titulo: 'Spirited Away'
        },
    ];
    return (
        <div>
            <div className="gallery-container">
                {galeria.map((item, index) => (
                    <div key={index}>
                        <Link to='./reproductor' href={item.imagen}>
                            <img src={item.imagen} alt={item.titulo} />
                            <p>{item.titulo}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='watched'>
                <p>Last Watched</p>
                <a href="">See All</a>
            </div>
            <div className='afterview'>
                {afterview.map((item, index) => (
                    <div key={index}>
                        <Link to='./reproductor' href={item.imagen}>
                            <img src={item.imagen} alt={item.titulo} />
                            <p>{item.titulo}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    
    );
}

export default MediaGallery;
