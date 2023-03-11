import Image from 'next/image'
import React from 'react'
import Img from '../public/pix.png'
import css from '../styles/Pix.module.css'

const Pix = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.pay}>
                    <h1>Pague com pix, leia o qr code abaixo.</h1>

                </div>

                <div className={css.img}>
                    <Image src={Img} alt="" layout="intrinsic" />
                </div>


                <div className={css.chave}>
                    <h1>Ou use a chave: 1d07070b-c6dd-4911-9c56-74027e297bcc</h1>
                </div>

                <div className={css.info}>
                    <h1>Após pagamento, envie o comprovante para: electronicplugins@gmail.com <br></br>E aguarde o recebimento do setup.</h1>
                </div>

            </div>
        </>
    )
}

export default Pix
