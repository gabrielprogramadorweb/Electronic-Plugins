import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
Footer

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>Ecommerce</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className='main-container'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
