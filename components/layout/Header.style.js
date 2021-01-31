import styled from "styled-components";
import Colors from "../style/Colors";
import { MaxDevice, MinDevice } from "../style/Device";

export const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: ${Colors.greenSoft};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

export const HeadMenu = styled.a`
color: white;
text-decoration: none;

:hover {
  text-decoration: underline;
}
`;

export const Item = styled.li``;

export const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media ${MaxDevice.tablet} {
    display: none;
  }
`;

export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media ${MinDevice.tablet} {
    display: none;
  }
`;

export const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: ${Colors.whiteSoft};
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 11%;
  top: 16%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 16px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
