import './footer.css'
const Footer = ()=>{
    return(
        <div className='footer'>
            <div className='title'>
                <h2>MovieAnimeApp</h2>
            </div>
            <div className="footer-data">
                
                <div>
                    <h3>Sobre Mi</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, reiciendis corrupti?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing e    
                    </p>
                </div>
                <div className='form'>
                    <h3>Contacta me</h3>
                    <label htmlFor="">Aqui</label>
                    <input type="text"  placeholder='Escribe Aqui'/>
                </div>
            </div>
            <div className='socials'>
                <ul>
                    <a href=""><li>Instagram</li></a>
                    <a href=""><li>Facebook</li></a>
                    <a href=""><li>Twitter/{'X'}</li></a>
                    <a href=""><li>Github</li></a>
                    <a href=""><li>Linkedln</li></a>
                </ul>
            </div>
            <div className='right'>
                <p>@copyright para Nahuel Escalante</p>
            </div>
        </div>
        
    )
}
export default Footer