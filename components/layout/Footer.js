import React from "react";
import { faHome, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  FooterButton,
  FooterItem, FooterMenu, FooterNotification, FooterText, SectionFooter,
} from "./Footer.style";
import Colors from "../style/Colors";

function Footer() {
  const router = useRouter();
  const { buyData } = useSelector((state) => state.Cart);

  const handleClickLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <SectionFooter>
      <FooterMenu>
        <FooterItem>
          <Link href="/homepage">
            <div>
              <FontAwesomeIcon icon={faHome} style={{ color: `${Colors.whiteSoft}`, fontSize: "26px" }} />
              <FooterText>Home</FooterText>
            </div>
          </Link>
        </FooterItem>

        <FooterItem>
          <Link href="/cart">
            <div>
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: `${Colors.whiteSoft}`, fontSize: "26px" }} />
              <FooterText>Cart</FooterText>
              {buyData.length > 0 && <FooterNotification>{buyData.length}</FooterNotification>}
            </div>
          </Link>
        </FooterItem>

        <FooterButton onClick={handleClickLogout}>
          <FooterItem>
            <FontAwesomeIcon icon={faUser} style={{ color: `${Colors.whiteSoft}`, fontSize: "26px" }} />
            <FooterText>Logout</FooterText>
          </FooterItem>
        </FooterButton>

      </FooterMenu>
    </SectionFooter>
  );
}

export default Footer;
