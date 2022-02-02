import {RiHeart3Line, RiHeart3Fill} from 'react-icons/ri'
import {useState, useContext} from 'react'
import {motion} from 'framer-motion'
import CheckedContext from '../context/checked/CheckedContext'


function ImageItem({photo}) {

    const [likeBtn, setlikeBtn] = useState(<RiHeart3Line />)

    const {getLikedPhotos, removeUnlikedPhoto} = useContext(CheckedContext)

    const handleLike = (e) => {
        if(e.target.checked){
            getLikedPhotos(photo)
            setlikeBtn(<RiHeart3Fill className='grow-animation'/>)
        } else{
            removeUnlikedPhoto(photo)
            setlikeBtn(<RiHeart3Line />)
        }
    }

    return (
        <motion.div className='card card-normal shadow-md mb-8 md:m-0'
            initial={{opacity: 0, y: '100vh'}}
            animate={{opacity: 1, y: '0'}}
            transition={{delay: 0.5, type: 'tween', duration: 0.5}}
            whileHover={{scale: 1.05}}
        >
            <figure>
                <img src={photo.img} alt='Nasa' />
            </figure>

            <div className='card-body flex-row items-center justify-between'>
                <div className='like-btn-wrapper'>
                    <input onChange = {handleLike} type='checkbox' id={`likeBtn-${photo.id}`}/>
                    <label htmlFor={`likeBtn-${photo.id}`}>{likeBtn}</label>
                </div>
                <h3 className='text-left'>Photo Taken: {photo.date}</h3>
            </div>
        </motion.div>
    )
}

export default ImageItem
