import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Content() {
    return (
        <div id='content'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}