import React, { useState } from "react";
import styled from "styled-components";
import Image from "../Image";
import { ThemeContext } from "styled-components";
import Chip from "../Chip";
import H4 from "../../core/text/H4";
import Text from "../../core/text/Text";
import ThunderSVG from "../../core/symbols/ThunderSVG";
import H1 from "../../core/text/H1";
import Button from "../Button";
import ArrowLeftSVG from "../../core/symbols/ArrowLeftSVG";
import ArrowRightSVG from "../../core/symbols/ArrowRightSVG";
import Pager from "../Pager";

const Container = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "436px"};
  background-color: ${props => props.theme.secondColor};
  margin-top: 30px;
  border-radius: ${40 / 2}px;
  padding: 0px 0px;
  box-shadow:0px 0px 10px 0px rgba(0,0,0,0.25); // not okay :(
`;

const StyledH1 = styled(H1)`
  width: 100%;
`;

const VBox = styled.div`
  position:absolute;
  width:400px;
  height: 300px;
  transform: translate(${props => props.x}px, 0);
`;

const Box = styled.div`
  position: absolute;
  top: ${50}px;
  right: ${40 / 1}px;
  width: 50%;
  height:300px;
  overflow: hidden;
`;


const InfoBox = ({ title, label, width, height, x }) => (
 
     <VBox x={x} width={width} height={height}>
      <StyledH1>
        {title ||
          "Vier weken gratis Belgische groene stroom, speciaal voor jou, Dries! "}
      </StyledH1>
      <div style={{ height: 40 }} />
      <Button label={label || "Ontvang je stroom"} />
    </VBox> 
  
);
const Card = ({ children, source, title, text, label }) => {
  const [currentPage, setPage] = useState(0);
  const pages = [1,2,3];
  const itemWidth = 541;
  const itemHeight = 180;
 
  return (
    <Container>
      <ThunderSVG x={"30%"} y={99} />
      <ArrowLeftSVG y={"50%"} x={40} />
      <ArrowRightSVG style={{ top: "50%", right: 50 }} />
      <Box width={itemWidth} height={itemHeight}>
      {pages.map((x, idx) => (
        <InfoBox
          key={idx}
          x={-(currentPage * itemWidth) + idx * 541}
          width={itemWidth}
          height={itemHeight}
          title={title}
          label={x}
        />
      ))} 
      </Box>
      <Pager onSelectPage={setPage} />
    </Container>
  );
};
export default Card;
