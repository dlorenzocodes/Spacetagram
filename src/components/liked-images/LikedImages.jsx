import CheckedContext from '../../context/checked/CheckedContext'
import LikedImageItem from './LikedImageItem'
import { useContext} from 'react'

function LikedImages() {

    const {images} = useContext(CheckedContext)

    if(images.length !== 0){
        return (
            <>
                <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 
                    xl:grid-cols-3 md:gap-8 px-10 pt-24'>
                    {images.map((images) => (
                        <LikedImageItem image={images} key={images.id}/>
                    ))}
                </div>
            </>
        )
    } else{
        return <h3>No Liked Images</h3>
    }
}

export default LikedImages
