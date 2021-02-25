import React from 'react';
import oops from '../images/oops.jpg'

import './main.css'

const Error = () => {
    return(
        <div>
            <div className='oops'>
                <img src={oops} alt="oops"/>
            </div>
            Упс, что-то пошло не так !!! <br/>
            Введите город корректно !!!

        </div>
    )
};

export default Error