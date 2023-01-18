import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import css from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={css.footer}>
            <p>2023 Duck Golden | Todos direitos reservados </p>
            <p className={css.icons}>
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
    )
}

export default Footer
