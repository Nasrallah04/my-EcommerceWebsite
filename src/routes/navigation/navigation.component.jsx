import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";

import {selectIsCartOpen} from "../../store/cart/cart.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.jsx";
import { currentUserSelctor } from "../../store/user/user.selector.jsx";

import { signOutStart } from "../../store/user/user.action.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles.jsx";

function Navigation() {
  // const { currentUser } = useContext(UserContext);\
  // useSelector it's a function that takes state as an argument and returns the part of the state that you want.
  const currentUser = useSelector(currentUserSelctor);
  const isCartOpen = useSelector(selectIsCartOpen);


  const dispatch = useDispatch()
  const signOutUser = () => dispatch(signOutStart());
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
