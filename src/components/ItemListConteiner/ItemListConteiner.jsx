import React, { useState, useEffect } from "react";
import styles from "./Styles/ItemListConteiner.module.scss";
import PropTypes from 'prop-types';
import { getProducts } from '../../utils/data';
import Loading from '../Loading/Loading.jsx';
import ItemList from '../ItemList/ItemList.jsx';


function ItemListConteiner() {
    const [items, setItems] = useState([])

    async function fetchData() {
        try {
            const response = await getProducts();
            setItems(response);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        items.length === 0 ? (<Loading />) : (<ItemList itemList={items}/>)
    );

};



ItemListConteiner.propTypes = {}

export default ItemListConteiner;