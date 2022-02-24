import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiHeart3Fill } from 'react-icons/ri'


function LikedImageItem({image, onDelete}) {

    // const [likeBtn, setlikeBtn] = useState(<RiHeart3Fill />)

    return (
        <motion.div className='card card-normal shadow-md mb-8 md:m-0'
            initial={{opacity: 0, y: '100vh'}}
            animate={{opacity: 1, y: '0'}}
            transition={{delay: 0.5, type: 'tween', duration: 0.5}}
            whileHover={{scale: 1.05}}
        >
            <figure>
                <img src={image.data.photo} alt='Nasa' />
            </figure>

            <div className='card-body flex-row items-center justify-between'>
                <div className='like-btn-wrapper'>
                    <input onClick = {() => onDelete(image.data.docID)} type='checkbox' id={`likeBtn-${image.id}`}/>
                    <label htmlFor={`likeBtn-${image.id}`}>{<RiHeart3Fill />}</label>
                </div>
                <h3 className='text-left'>Photo Taken: {image.data.date}</h3>
            </div>
        </motion.div>
    )
}

export default LikedImageItem
