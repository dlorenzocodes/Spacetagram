import img from '../assets/space-illustration.svg'

function SpaceImage() {
    return (
        <div className='wrapper'>
            <div className='space-img'>
                <img src={img} alt='space illustration'/>
            </div>
        </div>
    )
}

export default SpaceImage
