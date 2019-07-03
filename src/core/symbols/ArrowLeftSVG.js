import React from 'react'

const ArrowLeftSVG  = (props) =>
        <svg style={{position:"absolute",transform:'translate(-50%,-50%)',left:props.x,top:props.y,...props.style}}
         width='43' height='43' viewBox='0 0 43 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='21.5' cy='21.5' r='21.5' fill='#fff' />
    <path fillRule='evenodd' clipRule='evenodd' d='M19.8723 12.2927C20.263 11.9024 20.8955 11.9024 21.2851 12.2927C21.6758 12.6831 21.6758 13.3149 21.2851 13.7043L14.8505 20.1419C14.5358 20.4564 14.7586 21.0014 15.2032 21.0014H29.9839C30.5354 21.0014 31 21.4407 31 21.9917V21.9957C31 22.5467 30.5354 22.9979 29.9839 22.9979H15.2032C14.7586 22.9979 14.5358 23.528 14.8505 23.8424L21.3161 30.2991C21.7068 30.6884 21.7068 31.3183 21.3161 31.7086C20.9264 32.098 20.294 32.097 19.9033 31.7066L11.5853 23.3962C10.8049 22.6166 10.8049 21.3518 11.5853 20.5722C11.7661 20.3925 20.0532 12.1121 19.8723 12.2927Z'
    fill='#0C2358' />
</svg>


export default ArrowLeftSVG;
