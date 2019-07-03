import React from 'react'
import styled from 'styled-components';
import {ThemeContext} from "styled-components";


/* Label or CTA Light */
const Text = styled.div`
width:${100-8.96}%;
height:auto;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
opacity: 0.6;
max-height:100px;
min-height: 50px;
/* border:solid red 1px; */
padding: 0 ${8.96/2}% 0 ${8.96/2}%;
color: ${props=>props.theme.color}
`;

export default Text;