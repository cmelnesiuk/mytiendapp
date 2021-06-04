import './NavBar.css';
import logo from '../../assets/images/logo.svg'

function NavBar() {
  return (
   <nav className="topnav">
      
           <img alt="logo" className="logo" src={logo}/>
           <a href="#seccion1">Seccion 1</a>
           <a href="#seccion2">Seccion 2</a>
      
   </nav>
  );
}

export default NavBar;