
// Archivo test Jhon Nova

import React from 'react';
import Styles from './../../assets/styles/lastEventsCarousel.module.css';


import ReactCoverCarousel/*, { StyleRoot } */from 'react-cover-carousel';
import img1 from './../../assets/img/imagen1.jpeg';
import btnl from './../../assets/img/arrowLeft.png';
import btnr from './../../assets/img/arrowRight.png';

function HomePage(props) {
  const CardInfo = props => (
    <section className="card">
      <img src={props.img}></img>
      <p className={Styles.title}>{props.title}</p>
      <p  className={Styles.desc}>{props.description}</p>
      <p className={Styles.desc}>{props.description2}</p>
      <p className={Styles.desc}>{props.description3}</p>
    </section>

  )


  const items = [
    <CardInfo key={0} img={img1} title="DON JEDIONDO" description="DIRECTOR: xxxxxxx xxxxxx" description2="FECHA: xx/xx/xx $18.000 COP" description3="Más información">
    </CardInfo>,
    <CardInfo key={1} img={img1} title="DON JEDIONDO" description="DIRECTOR: xxxxxxx xxxxxx" description2="FECHA: xx/xx/xx $18.000 COP" description3="Más información" >
    </CardInfo>,
    <CardInfo key={2} img={img1} title="DON JEDIONDO" description="DIRECTOR: xxxxxxx xxxxxx" description2="FECHA: xx/xx/xx $18.000 COP" description3="Más información" >
    </CardInfo>
  ]



  return <div className={`${Styles.transparent} ${Styles.heightC}`}>
    {/*    <section>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/about"><a>About</a></Link>
    </section>
    <p>Welcome to Next.js! {props.message}</p>
 
<StyleRoot>*/}

    <ReactCoverCarousel
/*      height={window.innerHeight}
      width={window.innerWidth}
      activeImageStyle={{ margin: '3em', }}
      displayQuantityOfSide={2}
      transitionSpeed={300}
      mediaQueries={{
        backgroundColor: 'white',
        width: '100vw',
        '@media (max-width: 900px)': {
            height: '600px',
        },
        '@media (min-width: 900px)': {
            height: '800px',
        },
        }}*/
      otherFigureRotation={0}
      displayQuantityOfSide={1}
      navigation={true}
      activeImageIndex={2}
      height={window.innerHeight}
      width={window.innerWidth}
     /* PreviousButton={'<img style="position:absolute; right:0; top:50%" src='+{btnl}+'/>'}*/
      

    >
      {items}
    </ReactCoverCarousel>
    <style jsx>{`
      .card {
        background-color:#2a3991;
      width: 80%;
      max-width: 300px;
        
      }
    `}</style>
{/*
    </StyleRoot>*/}
  </div>
}

/* export async function getStaticProps() {
  return {
    props: {
      message: 'Holaa'
    }
  }
}
 */
export default HomePage;