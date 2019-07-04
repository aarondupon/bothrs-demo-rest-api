import React from 'react'

const ThunderShadowSVG  = (props) =>
        <svg style={{position:"absolute",transform:'translate(-50%,-50%)',left:props.x,top:props.y, ...props.style}}  width='111' height='46' viewBox='0 0 111 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <ellipse cx='55.387' cy='22.7' rx='55.228' ry='22.39' fill='rgb(31,142,125)' style={{
        mixBlendMode: 'multiply' }} />
    </svg>


export default ThunderShadowSVG;
