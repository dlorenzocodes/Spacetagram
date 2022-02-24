import { useState} from 'react'
import DOMPurify from 'dompurify'
import { toast } from 'react-toastify'
import earth from '../assets/earth.svg'
import { db } from '../config/firebase.config'
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'

function SignIn() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const {name, email, password} = formData

    const [isError, setisError] = useState(false)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const clearAlert = () => {
        setTimeout(() => {
            setisError(false)
            setErrors({})
        }, 3000)
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const nameRegx = /([a-z]|[A-Z])/gi
        const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const pwRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/

        if(!name || !email || !password){
            setisError(true)
            setErrors({msg: 'All fields must be filled out!'})
            clearAlert()
        } else if(
            !nameRegx.test(name) ||
            !emailRegx.test(email) ||
            !pwRegx.test(password)
        ) {
            setisError(true)
            setErrors({msg: 'Invalid field!'})
            clearAlert()
        } else{
            createUser()
        }
    }

    const createUser = async () => {

        try{
            // creates new user
            const auth = getAuth()
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            
            // save to firestore
            const formDataCopy = {...formData}
            delete formDataCopy.password
            formData.timestamp = serverTimestamp()
            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/')

        } catch(error){
            toast.error('Could not create account. Try again later!')
        }
        
    }


    return (
        <div className='w-2/3 mx-auto flex flex-col justify-center h-full'>
            <img className='w-16  mb-4 self-center earth-icon' src={earth} alt="earth"/>
            <form 
                className='form-control' 
                onSubmit={submitForm}
                noValidate
            >
                {isError && <p className='alert alert-error'>{errors.msg}</p>}
                <div className='mt-4'>

                <input 
                        type="text" 
                        id='name'
                        name='name'
                        value={name}
                        placeholder='Name'
                        className='input input-ghost w-full mb-4'
                        onChange={onChange}
                    />

                    <input 
                        type="email" 
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Email'
                        className='input input-ghost w-full mb-4'
                        onChange={onChange}
                    />

                    <input 
                        type="password" 
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        className='input input-ghost w-full'
                        onChange={onChange}
                    />  

                  
                </div>

                <button type='submit' className='btn mt-4'>Sign Up</button>

                <div className='noAccountContainer flex flex-row items-center 
                    justify-between mt-7'>
                    <p>Already have an account?</p>
                    <Link className='btn-link' to='/sign-in'>Sign In</Link>
                </div>
            </form>
    </div>
    )
}

export default SignIn

