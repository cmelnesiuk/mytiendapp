import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './item.css'

const Item = () => {

  const doit = () => {

    function MyProduct (producto, color, talle) {
      this.producto = producto;
      this.color = color;
      this.talle = talle;
    }
  
  var elementoProd = document.getElementById("product")
  var productoP1 = elementoProd.options[elementoProd.selectedIndex].text
  var elementoColor = document.getElementById("color")
  var colorP1 = elementoColor.options[elementoColor.selectedIndex].text
  var elementoTalle = document.getElementById("talle")
  var talleP1 = elementoTalle.options[elementoTalle.selectedIndex].text
  
  if (productoP1!=="-" && colorP1!=="-" && talleP1!=="-"){
  var AllProducts = new MyProduct(productoP1, colorP1, talleP1)
  }

  const getDatos = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(AllProducts);
      }, 2000);
    });
  }
  getDatos()

            .then(
              data => {
                if(productoP1==="remera" && colorP1==="rojo" && talleP1==="m"){
                  alert("Producto sin stock");
                }
                else if(productoP1==="pantalon" && colorP1==="negro" && talleP1==="s"){
                  alert("Producto sin stock");
                } else if(productoP1==="pollera" && colorP1==="azul" && talleP1==="l"){
                  alert("Producto sin stock");
                }
                else {
                  throw new Error ("Error");
                }
              },
              error => {}
              )
            .catch(error => {
              if(productoP1==="-" && colorP1==="-" && talleP1==="-"){
                alert("debe completar todos los datos")
              }else{
                alert("Prducto disponible!")
                console.log(AllProducts)
              }
              return ;
            })
}
        

    return (
        <div className="container">
          <label className="label mt-2" >producto</label>
            <select className="custom-select mr-sm-2" id="product">
              <option defaultValue value="5">-</option>
              <option value="0">remera</option>
              <option value="1">pantalon</option>
              <option value="2">camisa</option>
              <option value="3">campera</option>
              <option value="4">pollera</option>
            </select>
          <label className="label mt-3" >color</label>
            <select className="custom-select mr-sm-2" id="color">
              <option defaultValue value="5">-</option>
              <option value="0">negro</option>
              <option value="1">azul</option>
              <option value="2">rojo</option>
              <option value="3">violeta</option>
              <option value="4">blanco</option>
            </select>
          <label className="label mt-3" >talle</label>
            <select className="custom-select mr-sm-2" id="talle" >
              <option defaultValue value="6">-</option>
              <option value="0">xs</option>
              <option value="1">s</option>
              <option value="2">m</option>
              <option value="3">l</option>
              <option value="4">xl</option>
              <option value="5">xxl</option>
            </select>
              <button className="MyBtn mt-3" onClick={doit}>consultar stock</button>
              <ItemDetailContainer/>
        </div>   
        )
}

export default Item
