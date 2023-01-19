
import React from 'react'
import { urlFor } from '../lib/client'
import css from '../styles/Hero.module.css'

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className={css.hero}>
            <div>
                <img src={urlFor(heroBanner.image)}
                    width={250}
                    height={250} alt="headphones" className={css.image} />

                <img src={urlFor(heroBanner.image2)}
                    width={250}
                    height={250} alt="headphones" className={css.image} />

                { /** <p className='beats-solo'>{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1> */ }


            </div>

            <div>


                { /*<Link href={`/product/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
    </Link>*/}
                {/*<div className="desc">
                    <h5>Descrição</h5>
                    <p>{heroBanner.desc}</p>
</div>*/}
            </div>
        </div>
    )
}

export default HeroBanner
