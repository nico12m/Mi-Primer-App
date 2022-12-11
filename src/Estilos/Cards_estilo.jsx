import styled from "styled-components";

export const BarraNav = styled.div`
height:40px;
background-color:blue;
display:flex;
flex-direction:column;
align-items:flex-end;
`

export const Cartas =styled.div`
width:100%;
display:flex;
flex-direction:center;
align-items:center;
`;
export const Carta =styled.div`
margin:50px;
/* padding-top:50px;
padding-left:50px;
padding-right:50px; */
background-color:rgba(237, 238, 243,0.4);
border:2px solid rgba(237, 238, 243,0.4);
border-radius:20px;
align-items:column;
`;
export const Nombre =styled.h2`
width:200px;
height:30px;
position:relative;
top:-70px;
/* right:50px; */
background-color:rgba(237, 238, 243,0.4);
border-radius:10px;
color:#19191c;
`;