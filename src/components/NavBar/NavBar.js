import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (

    
    <nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <p href="#" className="brand">MYTIENDAPP</p>
          </div>
          <div className="col-md-6">
            <ul className="main">
              <li className="main-item">Inicio</li>
              <li className="main-item">Quienes somos</li>
              <li className="main-item">Contacto</li>
              <li className="main-item">Productos
                <ul className="submain mt-1">
                  <li className="main-subitem">Subproduct</li>
                  <li className="main-subitem">SubProduct</li>
                  <li className="main-subitem">SubProduct</li>
                  <li className="main-subitem">SubProduct</li>
                </ul>
              </li>
              <li className="main-item">Login</li>
               <div className="main-item">
                 <CartWidget/>
                </div>
            </ul>
          </div>
        </div>
      </div>

   
    </nav>


   
   
  );
}

export default NavBar;