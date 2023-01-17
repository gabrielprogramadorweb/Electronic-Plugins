import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Cart from './Cart'
import css from '../styles/Nav.module.css'



const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();


    return (
        <div className={css.navbar}>
            <p className={css.logo}>
                <Link href='/'>DUCK GOLDEN</Link>
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
