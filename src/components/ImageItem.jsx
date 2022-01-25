import { FaHeart } from 'react-icons/fa'

function ImageItem({photo}) {
    return (
        <div className='card card-normal shadow-md mb-8'>
            <figure>
                <img src={photo.img} alt='Nasa' />
            </figure>

            <div className='card-body flex-row items-center justify-between'>
                <FaHeart />
                <h3 className='text-left'>{photo.date}</h3>
            </div>
        </div>
    )
}

export default ImageItem
