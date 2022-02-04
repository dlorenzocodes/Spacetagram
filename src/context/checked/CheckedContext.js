import { createContext, useState} from 'react'

const CheckedContext = createContext();

export const CheckedProvider = ({children}) => {

    const [images, setImages] = useState([]);

    const getLikedPhotos = (photo) => {
       setImages([...images, photo])
    }

    const removeUnlikedPhoto = (photo) => {
        const imgs = images.filter(img => img.id !== photo.id)
        setImages([...imgs])
    }

    const clearLikedImages = () => {
        setImages([])
    }

    return <CheckedContext.Provider value={{
        images,
        getLikedPhotos,
        removeUnlikedPhoto,
        clearLikedImages
    }}>
        {children}
    </CheckedContext.Provider>
}

export default CheckedContext