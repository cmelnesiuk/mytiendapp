import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [items , setItems] = useState(initial)

    const addItems = () => {
        items < stock &&
            setItems(items + 1)
    }

    const minItems = () => {
        items > 0 &&
        setItems(items - 1)
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 align-self-center text-center">
                    <i className="far fa-minus-square minus-btn mb-1" onClick={minItems}></i>
                    <span className="contador">{items}</span>
                    <i className="far fa-plus-square plus-btn mb-1" onClick={addItems}></i>
                    <br></br>
                    <button className="button mb-2 mt-2" onClick={() => onAdd(items)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
