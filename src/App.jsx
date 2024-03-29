import { useState } from 'react'
import './App.css'
import axios  from 'axios';
import pic from './assets/pic';

function App() {
 const unsplashAccessKey ='xoF8IF0SB_gbO36OgIwEI-XGMthrqWH72T2taFZbqAM';
 const api = 'https://api.unsplash.com/photos/random?client_id=xoF8IF0SB_gbO36OgIwEI-XGMthrqWH72T2taFZbqAM';


  const [url, setUrl] = useState(pic);
  const [title, setTitle] = useState('');
  const [imgId, setImgId] = useState('');

  const handleClick = async()=>{
      const response = await fetch(api);
      const json = await response.json();
      console.log(json)
      setUrl(json.urls.small);
      setTitle(json.alt_description);
      setImgId(json.id)
  }

  const downloadImage = () => {
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = `image_${imgId}.jpg`;
      link.click();
    }
  };

  return (
    <>
      <h3 className="read-the-docs">
        Random image generator app by asif and numan
      </h3>


      <button className="tn" onClick={handleClick} >click me to generate new image</button>
      <button className="tn" onClick={downloadImage} disabled={!url}>Download Image</button>
      <p>Title : {title}</p>
      <div className="show">
      <img src={url} alt="not showing" />
      </div>




    </>
  )
}

export default App
