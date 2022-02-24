import {useState} from 'react'
import { toast } from 'react-toastify'
import earth from '../assets/earth.svg'
import { Link, useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function SignIn() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [isError, setisError] = useState(false)
    const [errors, setErrors] = useState({})

    const {email, password} = formData

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

    const submitForm = (e) => {
        e.preventDefault()
        const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const pwRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/

        if(!email|| !password){
            setisError(true)
            setErrors({msg: 'All fields must be filled out!'})
            clearAlert()
        } else if(
            !emailRegx.test(email) ||
            !pwRegx.test(password)
        ) {
            setisError(true)
            setErrors({msg: 'Invalid field!'})
            clearAlert()
        } else{
            signInUSer()
        }
    }

    const signInUSer = async () => {
        try{
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(auth, email, password)

            // eslint-disable-next-line 
            const user = userCredential.user 

            if(userCredential.user){
                navigate('/')
            }

        }catch(error){
            toast.error('An Error Has Occured!')
        }
    }


    return (
        <div className='w-2/3 mx-auto flex flex-col justify-center h-full'>
            <img className='w-16  mb-4 self-center earth-icon' src={earth} alt="earth"/>
            <form 
                noValidate
                className='form-control' 
                onSubmit={submitForm}
            >
                {isError && <p className='alert alert-error'>{errors.msg}</p>}
                <div className='mt-4'>
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

                <button 
                    type='submit' 
                    className='btn mt-4'
                    onSubmit={submitForm}
                >
                    Sign In
                </button>

                <div className='noAccountContainer flex flex-row items-center 
                    justify-between mt-7'>
                    <p>No account?</p>
                    <Link className='btn-link' to='/sign-up'>Sign Up</Link>
                </div>
            </form>
    </div>
    )
}

export default SignIn
