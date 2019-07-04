import React, { useState } from "react";
import styled from "styled-components";
import ThunderSVG from "../../core/symbols/ThunderSVG";
import ArrowLeftSVG from "../../core/symbols/ArrowLeftSVG";
import ArrowRightSVG from "../../core/symbols/ArrowRightSVG";
import HeroPager from "./HeroPager";
import HeroPage from "./HeroPage";
import ThunderShadowSVG from "../../core/symbols/ThunderShadowSVG";

const Container = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "436px"};
  margin-bottom:55px;
  background-color: ${props => props.theme.secondColor};
  margin-top: 30px;
  border-radius: ${40 / 2}px;
  padding: 0px 0px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25); // not okay :(
`;

const Box = styled.div`
  position: absolute;
  top: ${50}px;
  right: 12%;
  width: ${props=>props.width};
  height: 300px;
  overflow: hidden;
`;

const pages = [
    {
      title: "Vier weken gratis Belgische groene stroom, speciaal voor jou, Dries! ",
      action: "Ontvang je stroom"
    },
    {
      title: "Drie weken gratis Belgische groene stroom, speciaal voor jou, Pieter! ",
      action: "type hier een label"
    },
    {
      title:"Vijf weken gratis Belgische groene stroom, speciaal voor jou, Dries! ",
      action: "lorem ipsum"
    }
  ];
const Hero = ({ children, source, title, text, label }) => {
  const [currentPage, setPage] = useState(0);
  
  const contentWidth = '50%';
  const contentHeight = 180;

  const goToNextPage = () => setPage((currentPage + 1) % pages.length);

  const goToPrevPage = () =>
    setPage((pages.length + currentPage - 1) % pages.length);

  return (
    <Container>
    <div style={{position:'absolute',left:'24%'}}>
      <ThunderShadowSVG  y={320} style={{transform:'translate(-70px,0)'}}/>
      <ThunderSVG  y={149}  />
    </div>
      
      <Box width={contentWidth} height={contentHeight}>
        {pages.map(({ title, action }, idx) => (
          <HeroPage
            key={idx}
            x={`${-(currentPage * 100) + idx * 100}%`}
            width={`${100}%`}
            height={contentHeight}
            title={title}
            label={action}
          />
        ))}
      </Box>
      <ArrowLeftSVG y={"50%"} x={40} onClick={goToPrevPage} />
      <ArrowRightSVG style={{ top: "50%", right: 50 }} onClick={goToNextPage} />
      <HeroPager count={pages.length} selectedIndex={currentPage} onSelectPage={setPage} />
    </Container>
  );
};
export default Hero;
