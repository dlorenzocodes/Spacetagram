import PhotoContext from '../context/photos/PhotoContext'
import { useContext} from 'react'
import ImageItem from './ImageItem'
import Stats from './Stats'



function ImageResults() {

    const {photos} = useContext(PhotoContext)
   
    if(photos.length !== 0){
        return (
            <>
                <Stats photos={photos}/>
                <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 
                    xl:grid-cols-3 md:gap-8 px-10 pt-2'>
                    {photos.map((photo) => (
                        <ImageItem photo={photo} key={photo.id}/>
                    ))}
                </div>
            </>
        )
    } else{
        return null
    }

   
}

export default ImageResults
