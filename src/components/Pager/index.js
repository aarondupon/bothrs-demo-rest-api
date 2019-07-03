import React from "react";
import styled from "styled-components";

/* Label or CTA Light */
const Container = styled.div`
  /* width:; */
  margin-left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  /* position:absolute; */
  bottom: 30px;
  position: absolute;
  z-index: 9999999;
  color: #ffffff;
`;

const Dot = styled.div`
  width: fit-content;
  /* position:absolute; */
  /* right:7.28%; */
  transform: translate(0px, -50%);
  z-index: 9999999;

  border-radius: 24px;
  height: 14px;
  width: 14px;
  margin-left: 10px;
  /* H5 Body Text */
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  text-align: center;
  background-color: #ffffff;
  cursor:pointer;
  &.hover{
      background-color:#000000;
  }
`;

const Pager = ({ color, pages = [1, 2, 3], onSelectPage }) => {
  const selectPage = idx => {
    onSelectPage && onSelectPage(idx);
  };

  return(<Container color={color}>
    {pages.map( (x,idx) => 
      <Dot 
        key={idx}
        onClick={(e) => selectPage(idx)} 
        />
    )}
  </Container>);
};
export default Pager;
