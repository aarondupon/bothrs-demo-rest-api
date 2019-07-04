import React from 'react'
import styled from 'styled-components';
import ThunderIconSVG from '../../core/symbols/ThunderIconSVG';

/* Label or CTA Light */
const Container = styled.div`
width:fit-content;
display:flex;
flex-direction: row;
align-items:center;
position:absolute;
right:7.28%;
transform:translate(0px,-50%);
z-index:9999999;
padding:6px 12px 6px 12px;
border-radius:24px;
height:auto;
/* H5 Body Text */
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */
text-align: center;
background-color:${props=>props.color};
/* border:1px solid yellow; */
color:#ffffff;

`;

const Label = styled.div`
    margin-right:2px;
`


const Chip =  ({color,label}) =>
        <Container color={color} >
           <Label>{label}</Label> <ThunderIconSVG/>
        </Container> 
export default Chip;