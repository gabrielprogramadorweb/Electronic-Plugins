import Image from 'next/image'
import React from 'react'
import Img from '../public/pix.png'

const Pix = () => {
    return (
        <>
            <div className="container">
                <div className="pay">
                    <h1>Pague com pix, leia o qr code abaixo.</h1>

                </div>

                <div className='img'>
                    <Image src={Img} alt="" layout="intrinsic" />
                </div>


                <div className="chave">
                    <h1>Ou use a chave: 1d07070b-c6dd-4911-9c56-74027e297bcc</h1>
                </div>

                <div className="info">
                    <h1>Após pagamento, envie o comprovante para: electronicplugins@gmail.com</h1>
                </div>

            </div>
        </>
    )
}

export default Pix
