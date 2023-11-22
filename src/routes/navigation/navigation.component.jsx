import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";

import CardIcon from "../../components/card-icon/card-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/card.context";
import "./navigation.styles.scss";

import { signOutUser } from "../../utils/firebase/firebase";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {""}
              SIGN OUT {""}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGNIN
            </Link>
          )}
          {/* <Link className="nav-link" to="/contact">
            CONTACT
          </Link> */}
          <CardIcon />
        </div>
        {isCardOpen && <CartDropDown/>}

      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
