import './Main.css';
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Main() {

  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Seleccione la cantidad: "/>
    </div>
  );
}

export default Main;
