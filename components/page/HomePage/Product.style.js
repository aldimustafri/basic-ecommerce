import styled from "styled-components";
import Colors from "../../style/Colors";
import { MinDevice } from "../../style/Device";

export const SectionProduct = styled.section`
  padding: 10px 1em;
  border-top: 1px solid ${Colors.greenWhite};
`;

export const ProductContent = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 20px;
  
  @media ${MinDevice.tablet} {
    grid-auto-flow: unset;
    grid-template-columns: 49% 49%;
    grid-column-gap: 15px;
  }
`;

export const ProductList = styled.li``;

export const ProductWrapper = styled.div`
  background: ${Colors.greenWhite};
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
`;

export const ImageSection = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  // height: 200px;
`;

export const ImageProduct = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductTitle = styled.div`
  display: grid;
  grid-auto-columns: auto 70px;
  grid-auto-flow: column;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: .05em;
  padding: 8px 1em 10px 1em;
  position: relative;
  
  > i {
    position: absolute;
    z-index: 10;
    top: -45px;
    left: 10px;
    border-radius: 50%;
    border: 1px solid ${Colors.whiteSoft};
    background: ${Colors.whiteSoft};
    padding: 2px 1px 0px 1px;
  }
`;

export const DetailBtn = styled.button`
  display: inline-grid;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: .9375em;
  font-weight: 500;
  outline: none;
  background-color: ${Colors.greenSoft};
  position: relative;
  padding: .75em;
`;

export const DetailText = styled.div`
  color: ${Colors.whiteSoft};
`;
