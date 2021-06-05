import './NavBar.css';
import logo from '../../assets/images/logo.svg'
import "bootstrap/dist/css/bootstrap.min.css"

function NavBar() {
  return (

    <nav>
      <div class="container-fluid">
       <div class="row">
         <div class="col-md-6">
            <a href="#" class="brand">MYTIENDAPP</a>
         </div>s
         <div class="col-md-6">
           <div class="main">
            <a class="main-item" href="#">Inicio</a>
            <a class="main-item"  href="#">Quienes somos</a>
            <a class="main-item"  href="#">Contacto</a>
            <a class="main-item"  href="#">Productos</a>
            
            </div>
         </div>
       </div>
      </div>
    

    </nav>
   
   
  );
}

export default NavBar;