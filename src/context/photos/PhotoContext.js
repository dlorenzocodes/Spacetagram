import { createContext, useState} from 'react'

const PhotoContext = createContext();

export const PhotoProvider = ({children}) => {

    const [photos, setPhotos] = useState([])


    const fetchPhotos = async () => {
        const response = await fetch('http://localhost:5000/photos')
        const data = await response.json()
        setPhotos(data)
    }

    const clearFetchedPhotos = () => {
        setPhotos([])
    }

    return <PhotoContext.Provider value = {{
        photos,
        fetchPhotos,
        clearFetchedPhotos
    }}>
        {children}
    </PhotoContext.Provider>
}

export default PhotoContext