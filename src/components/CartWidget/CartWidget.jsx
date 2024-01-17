import React from 'react';
import styles from './Styles/CartWidget.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget (){
    return (
        <>
            <div className={styles.cart_widget}>
                <FontAwesomeIcon className={styles.icon_cart} icon={faCartShopping} />
            </div>
        </>
    )
};

export default CartWidget;

