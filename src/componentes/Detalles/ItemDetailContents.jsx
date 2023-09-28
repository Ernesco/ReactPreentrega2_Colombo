import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../Hooks/useFetch'

const ItemDetailContents = ( { id } ) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    return (
        <>
            {
                item !== null &&
                <ItemDetail item = {item} />
            }
        </>
    )
}
export default ItemDetailContents