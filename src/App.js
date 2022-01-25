import { PhotoProvider } from './context/PhotoContext'
import Title from './components/Title'
import SpaceImage from './components/SpaceImage'

const App = () => {
    return (
        <PhotoProvider>
            <main className='main-container'>
                <Title />
                <SpaceImage />
            </main>
        </PhotoProvider>
    )
}

export default App
