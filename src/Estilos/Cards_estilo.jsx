import styled from "styled-components";

export const BarraNav = styled.div`
background-color:rgba(0, 0, 0, 0.23);
display:flex;
flex-direction:column;
align-content:column;
text-align:column;
color:white;
`

export const Cartas =styled.div`
display:flex;
align-items:center;

`;
export const Carta =styled.div`
margin:50px;
padding:1px;
width:300px;
background-color:rgba(237, 238, 243,0.4);
border:2px solid rgba(237, 238, 243,0.4);
border-radius:20px;
flex-direction:center;
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