import {motion} from 'framer-motion'

function LikedImageItem({image}) {

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
                    <input type='checkbox' id={`likeBtn-${image.id}`}/>
                    <label htmlFor={`likeBtn-${image.id}`}>Heart</label>
                </div>
                <h3 className='text-left'>Photo Taken: {image.date}</h3>
            </div>
        </motion.div>
    )
}

export default LikedImageItem
