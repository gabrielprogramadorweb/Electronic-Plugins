import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Obrigado pelo seu pedido!</h2>
                {/*<p className="email-msg">Verifique sua caixa de entrada de e-mail para o recibo.</p>
                <p className="description">
                    Se você tiver alguma dúvida, envie um e-mail
                    <a className="email" href="mailto:order@example.com">
                        order@example.com
                    </a>
    </p>*/}
                <Link href="https://drive.google.com/file/d/1ZYe8XkLIKRtAPJxkB4-12kntIg6wbFFT/view">
                    <button type="button" width="300px" className="btn">
                        Passo a passo de instalação                    </button>
                </Link>
                <Link href="https://drive.google.com/drive/folders/19vruarDPgO_Psf7nCQK5mGIv1aau3iN4">
                    <button type="button" width="300px" className="btn">
                        Setup instalador                   </button>
                </Link>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continue comprando                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success