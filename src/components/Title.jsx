import PhotoContext from '../context/PhotoContext'
import { useContext } from 'react'
import Button from './Button'

function Title() {

    const {photos, fetchPhotos} = useContext(PhotoContext)

    const styles = photos.length === 0 ? 'title-wrapper' : 'title-wrapper hidde slide'
   
    const handleClick = () => {
        fetchPhotos()
    }


    return (
        <div className={styles}>
            <h1 className='title'>Spacestagram</h1>
            <p>Ready to see images gathered by NASA's Curiosity, 
            Opportunity, and Spirit rovers on Mars ?</p>
            <Button handleBtnClick={handleClick} type='button'>Let's Go</Button>
        </div>
    )
}

export default Title
