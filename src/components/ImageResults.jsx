import PhotoContext from '../context/PhotoContext'
import { useContext } from 'react'
import ImageItem from './ImageItem'
import SpaceImage from './SpaceImage'


function ImageResults() {

    const {photos} = useContext(PhotoContext)

    if(photos.length !== 0){
        return (
            <div className='px-10'>
                {photos.map((photo) => (
                    <ImageItem photo={photo} key={photo.id}/>
                ))}
            </div>
        )
    } else {
        return <SpaceImage/>
    }  
}

export default ImageResults
