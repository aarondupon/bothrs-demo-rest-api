import React from 'react'
import styled from 'styled-components';
import {ThemeContext} from "styled-components";

const H3 = styled.h3 `
/* H3 Sub-section or Widget Title */
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color:${props => props.theme.color};
/* identical to box height */
`
export default H3;