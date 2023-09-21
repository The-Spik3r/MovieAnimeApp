import './PlayerWithChapter.css'
const PlayerWithChapters = ()=>{
    return(
        <div className='play'>
            <div className='suppose'>
                <div className='suppose2'>
                    <div>
                        <div>
                            <h3>New Season 3</h3>
                            <h1>Jujutsu No Kaisen</h1>
                        </div>
                    </div>
                    <div className='timeDisplayUser'>
                        <div>
                            <p>S3:E3 "Hidden Inventory 3"</p>
                        </div>
                        <div>
                            <p>23 min</p>
                        </div>
                    </div>
                    <div className='progressbar'/>
                    <button className='keep'>Keep Watching</button>
                    
                </div>
            </div>
            <div className="banner">
                <img src="banner.png" alt="banner"  />
            </div>
                <div className='description'>
                    <div>
                        <h3>Description</h3>
                    </div>
                    <div className='des'>
                        <p>Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna's finger. Unintentionally, Yuji's friends unseal the Cursed Object, attracting dangerous Curses to their location.</p>
                    </div>
                    
                </div>       
        </div>
    )
}
export default PlayerWithChapters