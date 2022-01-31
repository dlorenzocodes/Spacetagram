import PhotoContext from '../context/PhotoContext'
import { useContext } from 'react'
import ImageItem from './ImageItem'


function ImageResults() {

    const {photos} = useContext(PhotoContext)

    if(photos.length !== 0){
        return (
            <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 px-10 '>
                {photos.map((photo) => (
                    <ImageItem photo={photo} key={photo.id}/>
                ))}
            </div>
        )
    } else{
        return null
    }

   
}

export default ImageResults
