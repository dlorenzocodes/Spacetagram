import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { PhotoProvider } from './context/photos/PhotoContext'
import { CheckedProvider } from './context/checked/CheckedContext'
import Home from './components/layout/Home'
import Title from './components/layout/Title'
import ImageResults from './components/fetched-images/ImageResults'
import LikedImages from './components/liked-images/LikedImages'

const App = () => {
    return (
        <PhotoProvider>
            <CheckedProvider>
                <Router>
                    <main className='main-container'>
                        <Title />
                        <Routes>
                            <Route exact path='/' element={<Home />}/>
                            <Route 
                                path='/likes' 
                                element={<LikedImages />}
                            >
                            </Route>
                            <Route path='/search' element={<ImageResults />}/>
                        </Routes>
                    </main>
                </Router>
            </CheckedProvider>
        </PhotoProvider>
    )
}

export default App
