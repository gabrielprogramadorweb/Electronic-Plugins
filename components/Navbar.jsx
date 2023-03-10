import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Cart from './Cart'
import css from '../styles/Nav.module.css'
import logo from '../src/pato.png'
import wpp from '../src/wpp.png'
import Image from 'next/image'



const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();


    return (
        <div className={css.navbar}>
            <Image src={wpp} alt='' className={css.wpp} />



            {/** <Image src={logo}
                alt="" className={css.pato} />*/ }
            <p className={css.logo}>
                <Link href='/'>Electronic Plugins</Link>
            </p>

            <button type='button'
                className={css.icon} onClick={() => setShowCart(true)}
            >
                <AiOutlineShoppingCart size={35} />
                <span className={css.item}>{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar
