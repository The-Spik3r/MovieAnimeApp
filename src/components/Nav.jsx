import './nav.css'
import { Link } from 'react-router-dom'
export default function nav () {
    return(
        <div className='nav'>   
            <nav className='nav'>
                <div className='element-nav'>
                    <Link to='../' href="" className='home'>
                        <img src="home.png"  />
                        <p>Home</p>
                    </Link>
                    <a href="" className='user'>
                        <img src="user.png"  />
                        <p>Profile</p>
                    </a>
                    <a href="" className='favorite'>
                        <img src="favorite.png"  />
                        <p>Favorite</p>
                    </a>
                    <a href="" className='search'>
                        <img src="search-normal.svg"  />
                        <p>Search</p>
                    </a>
                </div>
            </nav>
        </div>  
        
    )
}