import styled from "styled-components";
import Colors from "../style/Colors";

export const SectionSearch = styled.div`
  width: 100%;
  position: relative;
  margin-top: 18px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Colors.greenSoft};

  padding-top: 30px;
  padding-bottom: 12px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 3px solid ${Colors.greenSoft};
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: ${Colors.greenSoft};

  &:focus {
    color: ${Colors.blackSoft};
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid ${Colors.greenSoft};
  background: ${Colors.greenSoft};
  text-align: center;
  color: ${Colors.whiteSoft}
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;
