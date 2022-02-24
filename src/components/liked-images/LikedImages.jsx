import { v4 as uuidv4} from 'uuid'
import Title from '../layout/Title'
import { toast } from 'react-toastify'
import { getAuth } from 'firebase/auth'
import { useEffect, useState} from 'react'
import LikedImageItem from './LikedImageItem'
import { RiDislikeFill } from 'react-icons/ri'
import { db } from '../../config/firebase.config'
import { Link, useNavigate } from 'react-router-dom'
import { getDocs, collection, query, where, deleteDoc, doc} from 'firebase/firestore'

function LikedImages() {

    const [images, setImages] = useState([]);

    const navigate = useNavigate()

    const auth = getAuth()

    // Gets Liked Images Form Firestore
    useEffect(() => {
        const getPhotosFromDB = async() => {
            try{
                const imagesRef = collection(db, 'images')
                const q = query(imagesRef, where('userRef', '==', auth.currentUser.uid))
                const querySnapshot = await getDocs(q)
    
                const allLikedImages = []
    
                querySnapshot.forEach((doc) => {
                    return allLikedImages.push({
                        docID: doc.id,
                        id: uuidv4(),
                        data: doc.data()
                    })
                })
    
                setImages(allLikedImages)

            }catch(error){
                toast.error('Something went wrong. Try again later!')
            }
    
        }
        
        getPhotosFromDB()
    }, [auth.currentUser.uid])


    // Logs out users
    const handleLogOut = () => {
        auth.signOut()
        navigate('/sign-in')
    }

    const onDelete = async (docID) => {
        await deleteDoc(doc(db, 'images', docID))
        const updateUI = images.filter((img) => img.docID !== docID)
        setImages(updateUI)
        toast.success('Images was successfully removed!')
    }


    if(images.length === 0){
        return (
            <div className='p-14 h-screen flex justify-center items-center'>
                <div className=' flex items-center' id='no-likes-page'>
                    <RiDislikeFill className='text-3xl mb-2'/>
                    <h3 className='text-center text-xl md:text-3xl'>No Liked Images Yet</h3>
                </div>
            </div>
        )
    }

    return (
        <>
            <Title />
            <Link className='block py-8' to='/'>
                <button 
                    className='
                        btn-outline p-3 rounded-lg text-sm 
                        text-stone-900 m-auto block sm:w-1/4 lg:w-1/5' 
                    type='click'
                    onClick={handleLogOut}
                >
                        Sign out
                </button>
            </Link>
            <div className='img-wrapper grid md:grid-cols-2 lg:grid-cols-3 
                xl:grid-cols-3 md:gap-8 px-10'>
                {images.map((images) => (
                    <LikedImageItem 
                        image={images} 
                        key={images.id}
                        onDelete={() => onDelete(images.docID)}
                    />
                ))}
            </div>
        </>
    ) 
}

export default LikedImages
