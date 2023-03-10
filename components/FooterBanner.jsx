import React from 'react';
import Cartao from '../src/assets/band.png'
import { Link } from 'react-scroll'
import { urlFor } from '../lib/client';
import Product from './Product';
import css from '../styles/FooterBanner.module.css'

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, card, midText, desc, product, buttonText, image } }) => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>Formas de pagamento</p>
                    <img
                        src={urlFor(card)} className={css.card}
                    />
                    <h3>{largeText2}</h3>
                    <p>{saleTime}</p>
                    {/**<p>Contato: xx xxxxxxx</p>
                    <p>Email: XXX@XXX.com.br</p>*/}
                </div>
                <div className="right">
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    {/* <Link spy={true} to={Product} activeClass='activeClass' >
                        <button type="button">{buttonText}</button>
    </Link>*/}
                </div>

                { }
            </div>
        </div>
    )
}

export default FooterBanner