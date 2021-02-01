import styled from "styled-components";
import Colors from "../../style/Colors";

export const SectionDetail = styled.section`
  padding: 10px 1em;
  background: ${Colors.greenWhite};
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-auto-flow: row;
`;

export const ImageContent = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  position: relative;
    & > i {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: 1px solid ${Colors.whiteSoft};
    background: ${Colors.whiteSoft};
    padding: 3px 5px 3px 2px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
`;

export const SectionShare = styled.button`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
  border none
  background: ${Colors.greenSoft}
  display: grid;
  grid-gap: 10px;
  padding: 10px 1em;
  & > a {
    margin: 0;
  }
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${Colors.whiteSoft};

  padding-bottom: 30px;
  padding-top: 12px;
}
`;

export const TitleContent = styled.div`
  padding: 10px 1em;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 32px;
  justify-items: stretch;
`;

export const Title = styled.h3`
  padding: 0 0 10px 0;
  margin: 0;
  line-height: 22px;
  border-bottom: 1px solid ${Colors.whiteSoft};
`;

export const HeartBtn = styled.button`
  background: none;
  border: none; 
`;

export const DetailDescription = styled.div`
  padding-top: 10px;
  line-height: 1.6;
`;

export const SectionBuy = styled.section`
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: auto;
  padding: 10px 1em;
`;

export const TextPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-top: 10px;
  color: ${Colors.blackSoft};
  text-align: right;
  padding-right: 10px;
`;

export const BuyBtn = styled.button`
  font-size: 24px;
  font-weight: 700;
  color: ${Colors.blackSoft};
  text-align: center;
  padding-right: 10px;

  background-color: ${Colors.greenSoft};
  color: ${Colors.whiteSoft};
  border: 1px solid ${Colors.greenSoft};
  font-weight: 600;
`;
