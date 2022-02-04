import {RiDislikeFill} from 'react-icons/ri'
import CheckedContext from '../../context/checked/CheckedContext'
import PhotoContext from '../../context/photos/PhotoContext'
import LikedImageItem from './LikedImageItem'
import Title from '../layout/Title'
import { useContext} from 'react'
import {Link} from 'react-router-dom'

function LikedImages() {

    const {images,clearLikedImages} = useContext(CheckedContext)
    const {clearFetchedPhotos} = useContext(PhotoContext)

    const clearAllPhotoStates = () => {
        clearLikedImages()
        clearFetchedPhotos()
    }

    if(images.length !== 0){
        return (
            <>
                <Title />
                <Link className='block py-8' to='/'>
                    <button 
                        className='
                            btn-outline p-3 rounded-lg text-sm 
                            text-stone-900 m-auto block sm:w-1/4 lg:w-1/5' 
                        type='click'
                        onClick={clearAllPhotoStates}
                    >
                            Back To Home
                    </button>
                </Link>
                <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 
                    xl:grid-cols-3 md:gap-8 px-10'>
                    {images.map((images) => (
                        <LikedImageItem image={images} key={images.id}/>
                    ))}
                </div>
            </>
        )
    } else{
        return <div className='p-14 h-screen flex justify-center items-center'>
            <div className=' flex items-center' id='no-likes-page'>
                <RiDislikeFill className='text-3xl mb-2'/>
                <h3 className='text-center text-xl md:text-3xl'>No Liked Images Yet</h3>
            </div>
        </div>
    }
}

export default LikedImages
