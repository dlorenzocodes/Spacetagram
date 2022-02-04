import {useState} from 'react'
import {motion} from 'framer-motion'
import {RiHeart3Line, RiHeart3Fill} from 'react-icons/ri'

function LikedImageItem({image}) {

    const [likeBtn, setlikeBtn] = useState(<RiHeart3Fill />)

    const handleLike = (e) => {
        if(e.target.checked){
            setlikeBtn(<RiHeart3Line className='grow-animation'/>)
        } else{
            setlikeBtn(<RiHeart3Fill />)
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
                <img src={image.img} alt='Nasa' />
            </figure>

            <div className='card-body flex-row items-center justify-between'>
                <div className='like-btn-wrapper'>
                    <input onChange = {handleLike} type='checkbox' id={`likeBtn-${image.id}`}/>
                    <label htmlFor={`likeBtn-${image.id}`}>{likeBtn}</label>
                </div>
                <h3 className='text-left'>Photo Taken: {image.date}</h3>
            </div>
        </motion.div>
    )
}

export default LikedImageItem
