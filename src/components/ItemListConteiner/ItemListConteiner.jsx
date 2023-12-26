import "./ItemListConteiner.css";
import PropTypes from 'prop-types';

function ItemListConteiner ({productos}){
    return (
        <>
            <div>
                {productos}
            </div>
        </>
    )
};

ItemListConteiner.propTypes = {
    productos: PropTypes.string.isRequired
}

export default ItemListConteiner;