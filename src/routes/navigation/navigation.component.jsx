import { Outlet , Link} from "react-router-dom";
import CrownLogo from '../../assets/crown.svg';
import './navigation.styles.scss'
function Navigation() {
    return(
        <>
            <div className="navigation">
                <Link className="logo-container" to= '/'>
                    <img src={CrownLogo} className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to= '/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to= '/contact'>
                        CONTACT
                    </Link>
                    <Link className="nav-link" to= '/auth'>
                        SIGNIN
                    </Link>
                    
                </div>
            </div>
            <Outlet/>
        </>
    )
    
}


export default Navigation;