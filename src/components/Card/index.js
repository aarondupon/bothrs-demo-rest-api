import React, { useContext } from "react";
import styled from "styled-components";
import Image from "../Image";
import { ThemeContext } from "styled-components";
import Chip from "../Chip";
import H4 from "../../core/text/H4";
import Text from "../../core/text/Text";


const Container = styled.div`
  position: relative;
  width: ${props => props.width || "357px"};
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
  border-radius: ${20}px;
  overflow:hidden;
  /* display:flex; */
  flex-direction:column;
  background:#ffffff;
  box-shadow:0px 0px 10px 0px rgba(0,0,0,0.25); // not okay :(
`;




const Card = ({ children, source, title, text }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
   
      <Image width={357} source={source} />
      <Chip color={theme.secondColor} label={'1000'} />
      <div style={{height:40}}/>
      <H4>
          {title || 'Energiezuinige koelkast'}
      </H4>
      <div style={{height:10}}/>
      <Text  lines={2} ellipsis={<span>...</span>}>
          { text || 'The onChange event behaves as you would expect .'}
      </Text>
    </Container>
  );
};
export default Card;
