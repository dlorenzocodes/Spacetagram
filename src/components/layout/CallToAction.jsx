import {Link} from 'react-router-dom'
import PhotoContext from '../../context/photos/PhotoContext'
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
            <p>Ready to see images gathered by NASA's Curiosity, 
            Opportunity, and Spirit rovers on Mars ?</p>
            <Link to='/search'>
                <Button 
                    handleBtnClick={handleClick} 
                    type='button'>
                        Let's Go
                </Button>
            </Link>
        </div>
    )
}

export default Title
