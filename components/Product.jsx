import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import css from '../styles/Product.module.css'

const Product = ({ product: { image, name, slug, price, promo } }) => {
    return (
        <div>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={340}
                        height={420}
                        className="product-image"
                    />
                    <p className={css.promo}>{promo}</p>
                    <p className="product-name">{name} </p>
                    <p className="product-price">R${price} </p>
                </div>
            </Link>
        </div>
    )
}

export default Product
