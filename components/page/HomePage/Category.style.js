import styled from "styled-components";
import Colors from "../../style/Colors";

export const SectionCategory = styled.section`
  display: block;
  padding: 10px 0 30px 1em;
`;

export const CategoryContent = styled.div`
  background: ${Colors.greenCyan};
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  margin-right: 1em;
  padding: .5em .25em 0;
  & > img {
    margin: 0 auto;
  }
`;

export const ImageCard = styled.img`
  width: 100%;
  height: auto;
`;

export const CategoryDesc = styled.span`
  padding: 3px 6px 4px;
  display: grid;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  line-height: 14px;
  margin-top: 6px;
  color: ${Colors.greenSoft};
`;
