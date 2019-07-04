import React from "react";
import styled ,{keyframes} from "styled-components";
import H1 from "../../../core/text/H1";
import Button from "../../Button/Button";
import { useTransition, animated } from "react-spring";

const VBox = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: 300px;
  transform: translate(${props => props.x}, 0);
`;

const slidein = keyframes`
  0% { opacity: 0; transform:translate(100px,0)}
  100% { opacity: 1;transform:translate(0px,0) }
`

const StyledButton = styled(Button)`

  animation: ${slidein} 1s 0s both;
`

const StyledH1 = styled(H1)`
  width: 100%;
  font-size: 2.6em;
  @media (max-width: 768px) {
    font-size: 2em;
    line-height: 1.3em;
  }
  @media (max-width: 540px) {
    font-size: 1.8em;
    line-height: 1.1em;
  }
`;

const HeroPage = ({ page, width, height }) => {
  const transitions = useTransition(page, page => page.id, {
    from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-20vw, 0, 0)" }
  });
  const transitionsButton = useTransition(page, page => page.id, {
    from: { opacity: 1, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 1, transform: "translate3d(-20vw, 0, 0)" }
  });
  return (
    <div>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <VBox width={width} height={height}>
            <StyledH1>{item.title}</StyledH1>
            <div style={{ height: 30 }} />
            <StyledButton key={key} label={item.action} />
          </VBox>
        </animated.div>
      ))}
    </div>
  );
};

export default HeroPage;
