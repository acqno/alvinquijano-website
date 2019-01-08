import React from 'react';

import Spinner from './Spinner';
import Footer from './Footer';
import '../css/stylesheet.css';

const App = () => { 
    return (
        <div className="bg">
            <div className="text-container">
                <h1 className="title">Alvin Quijano</h1>
                <h3 className="description">Website currently in development</h3>
                <Spinner/>
                <h3>Please check back soon!</h3>
            </div>

            <Footer />   
        </div>
    );

}

export default App;