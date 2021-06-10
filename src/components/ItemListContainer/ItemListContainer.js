import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    const onAdd =(amount) => {
        console.log(amount)
      }

    return (
        <div className="container">
        <p className="greeting mt-2">{greeting}</p>
        <ItemCount initial={0} stock={10} onAdd={onAdd}/> 
        </div>
    )
}

export default ItemListContainer
