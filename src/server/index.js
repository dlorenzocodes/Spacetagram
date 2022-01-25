const express = require('express');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());


const apiKey = process.env.API_KEY;
const baseURl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${apiKey}`

app.get('/photos', async (req, res) => {
    try{
        const response = await axios.get(baseURl);
        const photos = response.data.photos;
        const photoInfo = getPhotosInfo(photos);
        console.log(photoInfo);
        res.send(photoInfo);
    }catch(err){
        console.log(err)
    }
})

function getPhotosInfo(photos){
    let photoInfo = []

    photos.forEach(photo => {
        photoInfo.push({
            id: photo.id,
            img: photo.img_src,
            date: photo.earth_date,
            status: photo.rover.status
        })
    })

    return photoInfo;
}




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening in port ${port}...`));