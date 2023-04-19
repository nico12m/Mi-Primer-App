import styled from "styled-components";

export const BarraNav = styled.div`
margin:0;
/* padding:2px; */
width: 100%;
/* position:center; */
background-color:rgba(0, 0, 0, 0.23);
display:flex;
flex-direction:center;
justify-items:center;
/* justify-content:right; */
align-items:center;
text-align:column;
color:white;
`

export const DivHome=styled.div`
    margin:0;
    width: 100%;
    height: 100%;
`

export const Cartas =styled.div`
margin:0;
padding:5px;
height:auto;
display:flex;
flex-direction:row-reverse;
flex-wrap:wrap-reverse;
justify-content:center;
align-content:center;

`;
export const Carta =styled.div`
margin:50px;
padding:1px;
width:300px;
background-color:rgba(237, 238, 243,0.4);
border:2px solid rgba(237, 238, 243,0.4);
border-radius:20px;
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
export const Cartass =styled.div`
margin:1px;
padding:5px;
width:100vh;
height:100vh;
display:flex;
flex-direction:column;

`;
