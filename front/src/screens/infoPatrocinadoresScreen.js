import React, {useState} from "react";

import Styles from './../assets/styles/landing.module.css';
import Texts from './../assets/styles/texts.module.css';
import boleta1 from './../assets/img/boleta1.png'
import compu from './../assets/img/compu.png'
import compra from './../assets/img/compra.png'
import or from './../assets/img/or.png'


export const infoPatrocinadoresScreen = () => {
const [isActive, setActive] = useState(false);

    return (

     

<div>

    <section>  

    <div className={Styles.boxPartOne3}>

            <div className={` ${Styles.item2}`}>

            <div className={` ${Styles.border}`}>

                < img  className= {`${Styles.img2}`}   src={or} />
                <div className={Styles.mostrar}>
                        <b className={Styles.tittleUsers}><p>ESPECTADOR</p></b>            
               </div >
            
            </div>
            <p>Donec at sem. Vestibulum cursus. Integer dolor.
                Vestibulum sit amet sem nec augue fermentum
                consectetuer. Integer justo.
                Vivamus vel sapien. Praesent nisl tortor, laoreet eu,
                dapibus quis, egestas non, mauris. Cum sociis
                natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nullam eleifend pharetra
                felis. Mauris nibh velit, tristique ac, lacinia in,</p>

                <hr/>

            </div >

                <div className={` ${Styles.item2}`}>

                <div className={` ${Styles.border}`}>

                    < img  className= {`${Styles.img2}`}   src={or} />
                    <div id="card2" className={Styles.mostrar}>
                            <b className={Styles.tittleUsers}><p>ORGANIZADOR</p></b>            
                </div >

                </div>
                <p>Donec at sem. Vestibulum cursus. Integer dolor.
                    Vestibulum sit amet sem nec augue fermentum
                    consectetuer. Integer justo.
                    Vivamus vel sapien. Praesent nisl tortor, laoreet eu,
                    dapibus quis, egestas non, mauris. Cum sociis
                    natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Nullam eleifend pharetra
                    felis. Mauris nibh velit, tristique ac, lacinia in,</p>

                    <hr/>

                </div >


            <div className={` ${Styles.item2}`}>

            <div className={` ${Styles.border}`}>

                < img  className= {`${Styles.img2}`}   src={or} />
                <div id="card3" className={Styles.mostrar}>
                        <b className={Styles.tittleUsers}><p>ESPECTADOR</p></b>            
            </div >

            </div>
            <p>Donec at sem. Vestibulum cursus. Integer dolor.
                Vestibulum sit amet sem nec augue fermentum
                consectetuer. Integer justo.
                Vivamus vel sapien. Praesent nisl tortor, laoreet eu,
                dapibus quis, egestas non, mauris. Cum sociis
                natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nullam eleifend pharetra
                felis. Mauris nibh velit, tristique ac, lacinia in,</p>

                <hr/>

            </div >
           


            

          
    </div>

</section>  






</div>



    )
}

export default infoPatrocinadoresScreen