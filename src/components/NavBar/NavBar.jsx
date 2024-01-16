import CartWidget from '../CartWidget/CartWidget.jsx';
import logo from '../../../public/mithralogo.png';
import "./NavBar.css";


function NavBar (){
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <br/>
                <div className='products'>
                    {/* hacer list de productos */}
                    Productos
                </div>
                <div className='sizechart'>
                    Tabla de talles
                </div>
                <div className='cartwidget'>
                    {/* agregar contador de carrito */}
                    <CartWidget/>  
                </div>
            </div>
        </>
    )
};

export default NavBar;
