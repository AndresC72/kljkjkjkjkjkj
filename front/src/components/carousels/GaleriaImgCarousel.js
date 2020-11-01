// -------------------carousel Galeria de imagenes
import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./GaleriaImgItem";
import "./../assets/styles/styles.css";
import uno from './../../assets/img/uno.png';
import dos from './../../assets/img/dos.png';
import Texts from './../assets/styles/texts.module.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 7 },
  { width: 1200, itemsToShow: 7 }

  
];

export const GaleriaImgCarousel = ()=> {
  return (
    <div>
      <p className={`${Texts.rightAlign3} ${Texts.tittle2}`}>GALERÍA DE IMÁGENES </p><hr/>
      <Carousel breakPoints={breakPoints}>
        <Item>< img src={uno}/> </Item>
        <Item>2</Item>
        <Item>< img src={dos}/></Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
       
      </Carousel>
    </div>
  );
}

export default GaleriaImgCarousel


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);