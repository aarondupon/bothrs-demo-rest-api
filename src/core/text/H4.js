import React from 'react'
import styled from 'styled-components';
import {ThemeContext} from "styled-components";

/* H4 Title Inside Widgets */
const H4 = styled.h4`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 28px;
/* border:solid 1px red; */
padding: 0 ${8.96/2}% 0 ${8.96/2}%;
color: ${props => props.theme.color};
`;

export default H4;