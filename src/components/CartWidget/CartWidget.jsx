import React from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget (){
    return (
        <>
            <div className='cartWidget'>
                <FontAwesomeIcon className='icon-cart' icon={faCartShopping} />
            </div>
        </>
    )
};

export default CartWidget;

