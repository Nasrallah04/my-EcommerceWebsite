import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-top: 10px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


interface NavLinkProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  to?: string;
}

export const NavLink = styled(Link)<NavLinkProps>`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none; /* Remove default Link underline */
  color: inherit; /* Inherit the color from parent */
  
  /* Additional styles for span */
  ${(props) => props.as === "span" && `
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `}
`