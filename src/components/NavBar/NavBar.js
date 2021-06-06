import './NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css"





function NavBar() {

  
  return (

    <nav>
      <div className="container-fluid">
       <div className="row">
         <div className="col-md-6">
            <p href="#" className="brand">MYTIENDAPP</p>
         </div>
         <div className="col-md-6">
           <ul className="main d-flex">
            <li className="main-item">Inicio</li>
            <li className="main-item">Quienes somos</li>
            <li className="main-item">Contacto</li>
            <li className="main-item">Productos</li>
            <li className="main-item">Loging</li>
            </ul>
         </div>
       </div>
      </div>
    

    </nav>
   
   
  );
}

export default NavBar;