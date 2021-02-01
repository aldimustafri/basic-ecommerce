import styled from "styled-components";
import Colors from "../style/Colors";

export const SectionFooter = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  border-top: 1px solid ${Colors.greenSoft};
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);
  background: ${Colors.greenSoft};
`;

export const FooterMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  grid-column-gap: 5px;
`;

export const FooterItem = styled.li`
  font-size: .875em;
  display: grid;
  justify-items: center;
  & > a, & > div {
    justify-items: center;
    display: grid;
  }
`;

export const FooterText = styled.div`
  font-size: 16px;
  padding-top: 8px;
  color: ${Colors.whiteSoft};
`;

export const FooterNotification = styled.i`
  position: absolute;
  top: -4px;
  margin-left: 15px;
  background-color: ${Colors.red};
  border: 1px solid ${Colors.red};
  padding: 8px 6px 8px 4px;
  line-height: 0;
  border-radius: 50%;
  color: ${Colors.whiteSoft};
  font-weight: 700;
  font-size: .875em;
`;

export const FooterButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
