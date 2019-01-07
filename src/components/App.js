import React from 'react';

import Spinner from './Spinner';
import '../css/stylesheet.css';

const App = () => { 
    return (
        <div className="bg">
            <div className="text-container">
                <h1 className="title">Alvin Quijano</h1>
                <h3 className="description">Website in development</h3>

                <Spinner/>
            </div>   
        </div>
    );

}

export default App;