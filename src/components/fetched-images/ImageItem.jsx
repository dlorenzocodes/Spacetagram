import {useState} from 'react'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify'
import { getAuth } from 'firebase/auth'
import { db } from '../../config/firebase.config'
import {RiHeart3Line, RiHeart3Fill} from 'react-icons/ri'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'


function ImageItem({photo}) {

    const [likeBtn, setlikeBtn] = useState(<RiHeart3Line />)

     // Save Liked Image To Firestore
     const saveImageToDB = async(photo) => {
        try{

            const auth = getAuth()  
            const imgData = {
                photo: photo.img,
                date: photo.date,
                userRef: auth.currentUser.uid,
                timeStamp: serverTimestamp()
            }

            await addDoc(collection(db, 'images'), imgData)
        }catch(error){
            toast.error('Something went wrong. Try again later!')
        }
    }

    const handleLike = (e) => {
        if(e.target.checked){
            saveImageToDB(photo)
            setlikeBtn(<RiHeart3Fill className='grow-animation'/>)
        } else{
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
