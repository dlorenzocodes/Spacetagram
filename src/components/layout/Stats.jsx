import {Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'

function Stats() {

    const [styles, setStyles] = useState(false)

    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted){
            window.addEventListener('scroll', handleScroll)
        }


        return () => { 
            isMounted.current = false 
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isMounted])

    
    const handleScroll = () => {
        if(window.scrollY >= 60) return setStyles(true)
        setStyles(false)
    }
   
    
    return (
        <div className={styles ? 'px-10 mb-6 sticky scrolled' : 'px-10 mb-6 sticky'}>
            <div className="flex flex-row items-center justify-between">
                <div className='stat flex flex-row items-center w-3/4  md:w-4/5'>
                    <div className="stat-desc text-stone-900 pl-2">Wanna see your liked photos?</div>
                </div>
                <Link to='/likes'>
                    <button 
                        className='btn-outline p-3 
                        rounded-lg text-sm text-stone-900' 
                        type='click'
                        >
                            Click Here
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Stats
