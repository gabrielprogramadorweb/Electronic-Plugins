import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import Navbar from './Navbar';
Footer

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>DuckGolden</title>
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
            <Toaster />
        </div>
    )
}

export default Layout
