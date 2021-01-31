import styled from "styled-components";
import Colors from "../../style/Colors";

export const LoginForm = styled.div`
  width:400px; 
  height:auto; 
  margin:100px auto; 
  padding: 40px;
  border: 1px solid ${Colors.greenSoft};
  background: ${Colors.whiteSoft};
`;

export const H1 = styled.h1`
  text-align:center;
`;

export const InputFields = styled.input`
display: block;
box-sizing: border-box;
width: 100%;
border-radius: 4px;
border: 1px solid white;
padding: 10px 15px;
margin-bottom: 10px;
font-size: 14px;
border:1px solid ${Colors.greenSoft};
`;

export const Button = styled.button`
  display: block;
  height: 50px;
  width: 156px;
  margin:auto;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
  text-align: center;
  background: ${Colors.greenSoft};
  border:0px; outline:none;
  cursor: pointer;
`;
