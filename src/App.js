import { PhotoProvider } from './context/photos/PhotoContext'
import { CheckedProvider } from './context/checked/CheckedContext'
import Title from './components/Title'
import ImageResults from './components/ImageResults'

const App = () => {
    return (
        <PhotoProvider>
            <CheckedProvider>
                <main className='main-container'>
                    <Title />
                    <ImageResults />
                </main>
            </CheckedProvider>
        </PhotoProvider>
    )
}

export default App
