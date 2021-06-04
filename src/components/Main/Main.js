import './Main.css';
import NavBar from '../NavBar/NavBar'

function Main() {
  return (
    <div className="App">
     <NavBar/>
       <div className="container">
         { `Formatear el numero ${12764 } `}
       </div>
    </div>
  );
}

export default Main;
