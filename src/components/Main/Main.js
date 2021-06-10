import './Main.css';
import NavBar from '../NavBar/NavBar'
import ItemCount from '../ItemCount/ItemCount';
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Main() {

  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Cantidad de productos: "/>
    </div>
  );
}

export default Main;
