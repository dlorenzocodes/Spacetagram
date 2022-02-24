import { useContext} from 'react'
import ImageItem from './ImageItem'
import Stats from '../layout/Stats'
import Title from '../layout/Title'
import PhotoContext from '../../context/photos/PhotoContext'



function ImageResults() {

    const {photos} = useContext(PhotoContext)
   
    if(photos.length !== 0){
        return (
            <>  
                <Title />
                <Stats />
                <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 
                    xl:grid-cols-3 md:gap-8 px-10 pt-24'>
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
