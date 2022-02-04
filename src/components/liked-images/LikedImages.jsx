import CheckedContext from '../../context/checked/CheckedContext'
import LikedImageItem from './LikedImageItem'
import { useContext} from 'react'
import {Link} from 'react-router-dom'

function LikedImages() {

    const {images,clearLikedImages} = useContext(CheckedContext)

    if(images.length !== 0){
        return (
            <>
                <Link to='/'>
                    <button 
                        className='
                            btn-outline p-3 rounded-lg text-sm 
                            text-stone-900 m-auto block w-1/5 mt-12' 
                        type='click'
                        onClick={() => clearLikedImages()}
                    >
                            Back To Home
                    </button>
                </Link>
                <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 
                    xl:grid-cols-3 md:gap-8 px-10 pt-12'>
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
