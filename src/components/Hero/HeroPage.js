import React from 'react';
import styled from 'styled-components';
import H1 from "../../core/text/H1";
import Button from "../Button";

const VBox = styled.div`
  position:absolute;
  width: ${props=>props.width};
  height: 300px;
  transform: translate(${props => props.x}, 0);
`;

const StyledH1 = styled(H1)`
  width: 100%;
`;

const HeroPage = ({ title, label, width, height, x }) => (
     <VBox x={x} width={width} height={height}>
      <StyledH1>
        {title}
      </StyledH1>
      <div style={{ height: 40 }} />
      <Button label={label} />
    </VBox> 
  
);

export default HeroPage;
