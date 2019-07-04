import React, { useContext } from "react";
import styled from "styled-components";
import Image from "../Image";
import { ThemeContext } from "styled-components";
import Chip from "../Chip";
import H4 from "../../core/text/H4";
import Text from "../../core/text/Text";


const Container = styled.div`
  position: relative;
  /* width: ${props => props.width || "357px"}; */

  /* max-height:${props => props.height || "340px"}; */
  height: ${props => props.height || 'auto'};
  background-color: "#f0f0f0";
  /* border: solid 1px green; */
  margin-left: 60px;
  &:first-child{
    margin-left: 0px;
  }
  margin-top: 30px;
  padding-bottom:20px;
  border-radius: 10.0161px;
  overflow:hidden;
  /* display:flex; */
  flex-direction:column;
  background:#ffffff;
  box-shadow: 0px 10.0161px 40.0645px rgba(0, 0, 0, 0.05), 0px 0px 40.0645px rgba(91, 201, 191, 0.1);
  transform: translateY(0px) scale(1) translateZ(0);
  transition: all 300ms;
  &:hover{
    transform: translateY(-5px) scale(1.005) translateZ(0);
 
    box-shadow: 0px 5.0161px 40.0645px rgba(0, 0, 0, 0.05), 0px 0px 35.0645px rgba(91, 201, 191, 0.1);

  }

  @media (max-width: 768px) {
    width:100%;
    margin-left:0px;
  }

`;




const Card = ({ children, source, title, text ,coins}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Image width={357} source={source} />
      <Chip color={theme.secondColor} label={coins} />
      <div style={{height:40}}/>
      <H4>
          {title}
      </H4>
      <div style={{height:10}}/>
      <Text  lines={2} ellipsis={<span>...</span>}>
          { text }
      </Text>
    </Container>
  );
};
export default Card;
