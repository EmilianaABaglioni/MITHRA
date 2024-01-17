import styles from "./Styles/ItemList.module.scss";
import PropTypes from 'prop-types';
import Item from '../Item/Item';


function ItemList({ itemList }) {
    return (
        <div className={styles.itemlist}>
            {itemList.map(({ id, name, price, image }) => {
                return (
                    <Item
                        key={id}
                        id={id}
                        name={name}
                        price={price}
                        image={image}
                    />
                );
            })}
        </div>
    )
};

ItemList.propTypes = {}

export default ItemList;