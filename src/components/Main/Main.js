import './Main.css';
import NavBar from '../NavBar/NavBar'
import ItemCount from '../ItemCount/ItemCount';


function Main() {

  const onAdd =(amount) => {
    console.log(amount)
  }

  return (
    <div className="App">
     <NavBar/>
     <ItemCount initial={0} stock={10} onAdd={onAdd}/>
    </div>
  );
}

export default Main;
