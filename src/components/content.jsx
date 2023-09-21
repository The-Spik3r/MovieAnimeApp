import Tag from './tag'
import MediaGallery from './mediagallery'
import './content.css'
function content() {
    return(
        <div className='content'>
            <Tag/>
            <MediaGallery/>
        </div>
    )
}
export default content