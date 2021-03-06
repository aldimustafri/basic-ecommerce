import styled from "styled-components";
import Colors from "../../style/Colors";

export const Title = styled.h2`
  padding: 0 0 22px 0;
  margin: 0;
  line-height: 22px;
  border-bottom: 1px solid ${Colors.whiteSoft};
`;

export const SectionCart = styled.section`
  padding: 10px 1em;
`;

export const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-row-gap: 10px;
`;

export const CartItem = styled.li`
  background: ${Colors.greenSoft};
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 88px auto;
`;

export const CartText = styled.div`
  display: grid;
`;

export const SectionImage = styled.div`
  width: 88px;
  height: 88px;
  overflow: hidden;
  background: ${Colors.whiteSoft};
  display: grid;
  justify-content: center;
  align-content: center;
`;

export const CartImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CartDetail = styled.div`
  padding: 10px 1em;
`;

export const CartTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
  color: ${Colors.whiteSoft};

`;

export const CartPrice = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  padding-top: 10px;
  color: ${Colors.whiteSoft};
`;

export const CartBtn = styled.button`
  float: right;
  padding: .5em .75em;
  display: inline-grid;
  cursor: pointer;
  border-radius: 4px;
  font-size: .9375em;
  background-color: ${Colors.greenCyan};
  color: ${Colors.greenSoft};
  border: 1px solid ${Colors.greenCyan};
  font-weight: 600;
`;
