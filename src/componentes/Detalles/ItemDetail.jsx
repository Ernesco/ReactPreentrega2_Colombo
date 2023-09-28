import React from 'react'
import Style from '../Style/style.module.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemDetail = ( { item } ) => {
    return (
        <div className={Style.Detalles}>
            <h5 className={Style.titledetail}> {item.title} </h5>
            <img src={item.image} alt="" className={Style.imagen}/>
            <p className={Style.Descrpdetail}> descripcion {item.description} </p>
            <p className={Style.pricedetail}> $ {item.price} </p>
            <Link to={`/Detalle/${item.id}`}>
                <Button> Comprar </Button>
            </Link>
        </div>
    )
}

export default ItemDetail