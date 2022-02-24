import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


export const useAuthStatus = () => {

    const [loggedIn, setloggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted){
            const auth = getAuth()
            onAuthStateChanged(auth, (user) => {
                if(user){
                    setloggedIn(true)
                }

                // checking status waits for the auth to veryify
                // if the user is logged in, if it is it returns false
                // it gives time of the status to change
                setCheckingStatus(false)
            })   
        }
        
        return () => {
            isMounted.current = false
        }
    }, [isMounted])

   
    return { loggedIn, checkingStatus }
}




