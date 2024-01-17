import styles from "./Styles/Item.module.scss";
import PropTypes from 'prop-types';


function Item({ id, name, price, image, stock }) {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.image}>
                    <img src={image} alt={name} />
                </div>
                <div className={styles.info}>
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <p>{stock}</p>
                    <button className={styles.button}>VER MÁS</button>
                </div>
            </div>
        </>
    )
};

Item.propTypes = {}

export default Item;