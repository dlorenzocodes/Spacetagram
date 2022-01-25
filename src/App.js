import { PhotoProvider } from './context/PhotoContext'
import Title from './components/Title'
import ImageResults from './components/ImageResults'

const App = () => {
    return (
        <PhotoProvider>
            <main className='main-container'>
                <Title />
                <ImageResults />
            </main>
        </PhotoProvider>
    )
}

export default App
