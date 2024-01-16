import style from "./ItemListConteiner.module.scss";
import PropTypes from 'prop-types';


function ItemListConteiner (props){
    return (
        <>
             <div>
                <ul>{props.product}</ul>
            </div>
        </>
    )
};

ItemListConteiner.propTypes = {
    product: PropTypes.string.isRequired
}

export default ItemListConteiner;