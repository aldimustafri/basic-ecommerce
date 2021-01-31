import React, { useState } from "react";
import {
  Nav, Logo, Item, NavIcon, Line, Overlay, OverlayMenu, HeadMenu, Menu,
} from "./Header.style";

function Header() {
  const [toggle, toggleNav] = useState(false);

  return (
    <>
      <Nav>
        <Logo>E-Commerce</Logo>
        <Menu>
          <Item>
            <HeadMenu>
              Keluar
            </HeadMenu>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <HeadMenu>
              Keluar
            </HeadMenu>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
}

export default Header;
