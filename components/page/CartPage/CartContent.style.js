import styled from "styled-components";
import Colors from "../../style/Colors";

export const Title = styled.h2`
  padding: 0 0 10px 0;
  margin: 0;
  line-height: 22px;
  border-bottom: 1px solid ${Colors.whiteSoft};
`;

export const SectionCart = styled.section`
  padding: 10px 1em;
`;

export const CartItem = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-row-gap: 10px;
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
`;

export const CartPrice = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  padding-top: 10px;
  color: ${Colors.blackSoft};
`;

export const CartBtn = styled.button`
right: 8px;
bottom: 8px;
padding: .5em .75em;
display: inline-grid;
cursor: pointer;
border-radius: 4px;
font-size: .9375em;
background-color: #ffa883;
color: #fff;
border: 1px solid #ffa883;
font-weight: 600;
`;
