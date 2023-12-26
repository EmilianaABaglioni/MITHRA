import CartWidget from '../CartWidget/CartWidget.jsx';
import logo from './LOGO-MITHRA.png';

function NavBar (){
    return (
        <>
            <div>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                     VER TODOS LOS PRODUCTOS
                </div>
                <div>
                    SALE
                </div>
                <div>
                    TABLA DE TALLES
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </>
    )
};

export default NavBar;
