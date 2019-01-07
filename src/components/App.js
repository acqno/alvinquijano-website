import React from 'react';

import Spinner from './Spinner';
import Footer from './Footer';
import '../css/stylesheet.css';

const App = () => { 
    return (
        <div className="bg">
            <div className="text-container">
                <h1 className="title">Alvin Quijano</h1>
                <h3 className="description">Website in development</h3>

                <Spinner/>
            </div>

            <Footer />   
        </div>
    );

}

export default App;