import React from 'react'
import styled from 'styled-components';

/* Label or CTA Light */
const Container = styled.div`
width:fit-content;
/* position:absolute; */
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
background-color:${props=>props.color || props.theme.headerButtonColor};
cursor: pointer;
color:#ffffff;

`;


const Button =  ({color,label, ...props}) =>
        <Container color={color} {...props} >
            {label}
        </Container> 
export default Button;