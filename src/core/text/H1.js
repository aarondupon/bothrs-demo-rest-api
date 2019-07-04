import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1 `

/* H1 - Biggest Title */

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 2.6em;
line-height: 57px;

color:${props => props.theme.headerTextColor};
/* identical to box height */
`
export default H1;