import img from '../assets/space-illustration.svg'
import PhotoContext from '../context/PhotoContext'
import { useContext } from 'react'

function SpaceImage() {
    const {photos} = useContext(PhotoContext)
    const styles = photos.length === 0 ? 'space-img' : 'space-img hidde'
    return (
        <div className={styles}>
            <img src={img} alt='space illustration'/>
        </div>
    )
}

export default SpaceImage
