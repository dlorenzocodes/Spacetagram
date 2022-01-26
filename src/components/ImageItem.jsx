import {RiHeart3Line, RiHeart3Fill} from 'react-icons/ri'
import {useState} from 'react'
import {motion} from 'framer-motion'

function ImageItem({photo}) {

    const [likeBtn, setlikeBtn] = useState(<RiHeart3Line />)

    const handleLike = (e) => {
        if(e.target.checked){
            setlikeBtn(<RiHeart3Fill />)
        } else{
            setlikeBtn(<RiHeart3Line />)
        }
    }

    return (
        <div className='card card-normal shadow-md mb-8'>
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
        </div>
    )
}

export default ImageItem
