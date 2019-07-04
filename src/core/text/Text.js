import React from 'react'
import styled from 'styled-components';
import {ThemeContext} from "styled-components";
import Truncate from 'react-truncate';



/* Label or CTA Light */
const TruncateStyled = styled(Truncate)`
width:${100}%;
height:auto;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
opacity: 0.6;

color: ${props=>props.theme.color};
 /* hide text if it more than N lines  */
 overflow: hidden;

`;

const Container = styled.div`
  width:${100- 8.96*2}%;
  margin-left: ${8.96/2}%;
`

const Text = (props)=>
    <Container>
        <TruncateStyled {...props} />
    </Container>
export default Text;