import React from 'react';
import s from './../components.module.css'
import './../../App.css'
const Loader = () => {
    return (
        <div className={s.loaderWrapper}>
            <div className="lds-hourglass"></div>
        </div>
    )
}

export default Loader