import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import styles from "./Styles/ItemListContainer.module.scss";
import PropTypes from 'prop-types';
import { getProducts } from '../../utils/data.js';
import Loading from '../Loading/Loading.jsx';
import ItemList from '../ItemList/ItemList.jsx';


function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    async function productsList() {
        const products = await getProducts();
        if (categoryId) {
            const filteredProducts = products.filter((product) => product.category === categoryId)
            setItems(filteredProducts)
            setLoading(false)
        } else {
            setItems(products)
            setLoading(false)
        }
    };

    useEffect(() => {
        productsList()
    }, [categoryId]);

    return (
        loading ? (<Loading />) : (<ItemList itemList={items} />)
    );

};



ItemListContainer.propTypes = {}

export default ItemListContainer;