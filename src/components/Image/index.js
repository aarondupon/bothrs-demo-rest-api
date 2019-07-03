import React from 'react'
import styled from 'styled-components';


const RATIO = 0.6022408964;
const Image  = styled.div`
    width:${props=>props.width}px;
    height:${props=>props.width*RATIO}px;
    background-image:${props=>props.source};
    background-color: lightgray;
    
`
export default Image;
// export default function index({source}) {
//     return (
//         <Image source={source} />
//     )
// }