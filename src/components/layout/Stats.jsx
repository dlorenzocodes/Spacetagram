import {Link} from 'react-router-dom'
import {useContext, useState, useEffect,useRef} from 'react'
import CheckedContext from '../../context/checked/CheckedContext'

function Stats() {

    const {images} = useContext(CheckedContext)
    const [styles, setStyles] = useState(false)

    const isMounted = useRef(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    const handleScroll = () => {
        if(window.scrollY >= 60){
            setStyles(true)
        }else{
            if(isMounted.current){
                setStyles(false)
            }
        }
    }
   
    
    return (
        <div className={styles ? 'px-10 mb-6 sticky scrolled' : 'px-10 mb-6 sticky'}>
            <div className="flex flex-row items-center justify-between">
                <div className='stat flex flex-row items-center w-3/4  md:w-4/5'>
                    <div className='stat-title text-stone-900'>Likes:</div>
                    <div className="stat-desc text-stone-900 pl-2">{images.length}</div>
                </div>
                <Link to='/likes'>
                    <button 
                        className='btn-outline p-3 
                        rounded-lg text-sm text-stone-900' 
                        type='click'
                        >
                            Liked Photos
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Stats
