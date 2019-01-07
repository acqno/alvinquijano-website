import React from 'react';
import '../css/stylesheet.css';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-dual-ring">
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;