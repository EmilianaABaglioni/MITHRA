import CartWidget from '../CartWidget/CartWidget.jsx';
import Logo from '../Logo/Logo.jsx'
import styles from './Styles/NavBar.module.scss';
import { listCategory } from '../../utils/data';
import { Link, NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <>
            <Logo />

            <div className={styles.navbar}>

                <div className={styles.categories}>
                    {listCategory.map((category, index) => (
                        <Link
                            to={`/products/${category}`}
                            key={index}
                            className={styles.linkcategory}
                        >
                            {category}
                        </Link>
                    ))}
                </div>

                <div className={styles.boxlogin}>
                    <div className={styles.login}>
                        CREAR CUENTA
                    </div>

                    <span>|</span>

                    <div className={styles.createacount}>
                        INICIAR SESION
                    </div>
                </div>

                {/*display: none - se renderiza una vez que se inicia sesion*/}
                <div className={styles.profile}>
                    MI PERFIL
                </div>

                <div className={styles.cartwidget}>
                    <CartWidget />
                </div>

            </div>

        </>
    )
};

export default NavBar;
