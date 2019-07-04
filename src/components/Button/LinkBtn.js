import styled from 'styled-components';

const LinkBtn = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    text-decoration-line: underline;
    cursor: pointer;
    color:${props=>props.theme.secondColor};
`
export default LinkBtn;