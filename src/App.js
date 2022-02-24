import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Home from './components/layout/Home'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './components/PrivateRoute'
import { PhotoProvider } from './context/photos/PhotoContext'
import LikedImages from './components/liked-images/LikedImages'
import ImageResults from './components/fetched-images/ImageResults'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <PhotoProvider>
                    <Router>
                        <main className='main-container'>
                            <Routes>
                                <Route exact path='/' element={<Home />}/>
                                <Route path='/sign-in' element={<SignIn />} />
                                <Route path='/sign-up' element={<SignUp />} />
                                <Route path='/likes' element={<PrivateRoute />}>
                                    <Route path='/likes' element={<LikedImages />} />   
                                </Route>
                                <Route path='/search' element={<PrivateRoute />}>
                                    <Route path='/search' element={<ImageResults />}/>
                                </Route>
                            </Routes>
                        </main>
                    </Router>
            </PhotoProvider>


            <ToastContainer />
        </>
        
    )
}

export default App
