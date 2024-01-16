import React from 'react';
import style from './CartWidget.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget (){
    return (
        <>
            <div className={style.cart_widget}>
                <FontAwesomeIcon className={style.icon_cart} icon={faCartShopping} />
            </div>
        </>
    )
};

export default CartWidget;

