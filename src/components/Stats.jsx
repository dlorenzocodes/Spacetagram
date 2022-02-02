import {useContext, useState} from 'react'
import CheckedContext from '../context/checked/CheckedContext'

function Stats() {

    const {images} = useContext(CheckedContext)
    const [styles, setStyles] = useState(false)

    window.onscroll = () => {
        handleScroll()
    }

    const handleScroll = () => {
        if(window.scrollY >= 60){
            setStyles(true)
        }else{
            setStyles(false)
        }
    }
   
    
    return (
        <div className={styles ? 'px-10 mb-6 sticky scrolled' : 'px-10 mb-6 sticky'}>
            <div className="flex flex-row items-center justify-between">
                <div className='stat flex flex-row items-center w-4/5'>
                    <div className='stat-title text-stone-900'>Likes:</div>
                    <div className="stat-desc text-stone-900 pl-2">{images.length}</div>
                </div>
                <button className='btn-outline p-3 rounded-lg text-sm 
                text-stone-900' type='click'>Liked Photos</button>
            </div>
        </div>
    )
}

export default Stats
