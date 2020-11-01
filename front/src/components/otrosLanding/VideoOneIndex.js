import React from 'react'
import Styles from './../../assets/styles/landing.module.css';
import Ipad from './../../assets/img/Ipad.png';
import Celular from './../../assets/img/Celular.png';
import videoPptPC from './../../assets/video/video1.mp4';
import btnImg from './../../assets/img/Play.png'


export const VideoOneIndex = () => {

    let showHide = Styles.show;

    const handleClick = () =>{
        //dar play al video
        document.getElementById("videoPC").play();
       //ocultar el botón de play
document.getElementById("showHide").style.display="none";
    }

    return (
        <>
<p>< img className= {`${Styles.Ipad}`}   src={Ipad} />  </p>

<p>< img className= {`${Styles.Celular}`}   src={Celular} />  </p>
<video className={Styles.videoPC} id="videoPC" src = {videoPptPC} >
        Tu navegador no admite el elemento <code>video</code>.
      </video>
      <button className={Styles.btnVideo} onClick={handleClick}> <img id="showHide" src={btnImg}/></button>
     </>
    )
}

export default VideoOneIndex