import { element } from 'prop-types'
import React from 'react'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
//Esta es todo el bloque que se va a ejecutar al hacer click en el boton de ver detalles
const letsdoit = () => {

//creo mi objeto cuyos datos seran ingresados x el usuario
function MyProduct (producto, color, talle) {
          this.producto = producto;
          this.color = color;
          this.talle = talle;
         }
//Arrays para los detalles del producto (aca quise crear un solo array con todos los objetos, pero cuando intentaba llamar a cada uno me daba error)
const Remera = () => [
          {Producto: 'remera', Color: 'azul', Talle: 'S', Material: "algodon", Stock: 1}
      ]
const Pantalon = () => [
        {Producto: 'pantalon', Color: 'negro', Talle: 'S', Material: "jeans", Stock: 5}
    ]
const Campera = () => [
        {Producto: 'campera', Color: 'violeta', Talle: 'S', Material: "lycra", Stock: 3}
    ]
       
var elementoProd = document.getElementById("product")
var productoP1 = elementoProd.options[elementoProd.selectedIndex].text
var elementoColor = document.getElementById("color")
var colorP1 = elementoColor.options[elementoColor.selectedIndex].text
var elementoTalle = document.getElementById("talle")
var talleP1 = elementoTalle.options[elementoTalle.selectedIndex].text
 

       if (productoP1!=="-" && colorP1!=="-" && talleP1!=="-"){
       var AllProducts = new MyProduct(productoP1, colorP1, talleP1)
       }
      
      const getDetails = () => {
        return new Promise ((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      }
      getDetails()
      
                .then(
                  data => {
                    if(productoP1==="remera" && colorP1==="azul" && talleP1==="s"){
                    console.log(Remera)
                    }
                    else if(productoP1==="pantalon" && colorP1==="negro" && talleP1==="s"){
                      console.log(Pantalon);
                    } else if(productoP1==="campera" && colorP1==="violeta" && talleP1==="s"){
                      console.log(Campera);
                    }
                    else {
                      throw new Error ("Error");
                    }
                  },
                  error => {}
                  )
                .catch(error => {
                    alert("No se encontraron detalles para el producto")
                  return ;
                }
                )
                
              }
              
    return (
        <div>
            <button className="BtnDetail" onClick={letsdoit}>ver detalles</button>
        </div>
    )
}

export default ItemDetailContainer

