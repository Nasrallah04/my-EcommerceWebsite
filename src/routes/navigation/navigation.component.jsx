import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/card.context";
import "./navigation.styles.jsx";

import { signOutUser } from "../../utils/firebase/firebase";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles.jsx";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrownLogo} className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              {""}
              SIGN OUT {""}
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGNIN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown/>}

        </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
