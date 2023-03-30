import styled from "styled-components";
import { Link } from "react-router-dom";

export const Linke = styled(Link)`
text-decoration:none;
color:black;
left:-100%;
transition:all .3s ease;

&:hover{
   border-right:2px solid black;
   border-left:2px solid black;
   /* border-radius:5px; */
}`
export const A = styled.a`
    text-decoration:none;
    color:black;
`