import React, {useContext} from 'react'
import styled from 'styled-components';
import H3 from '../../core/text/H3';
import LinkBtn from '../Button/LinkBtn';

const Flex = styled.div `
    display:flex;
    flex-direction:row;
    width:${props => props.width || '100%'};
    margin-bottom:64px;
    /* height:${props => props.height || '403px'}; */
    /* border:solid 1px red; */
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction:column;
    }
`

const ListHeader = styled.div `
    padding: 0px 0px;
    display:inline;
`

const RightBox = styled.div`
    float:right;
    margin-top:10px;

`
const StyledH3 = styled(H3)`
    float:left;
`

const List = ({children, source='', title=''}) => {
    return (
        <div>
            <ListHeader>
            <StyledH3>{title}</StyledH3>
            <RightBox>
            <LinkBtn>Meer {title.toLowerCase()}</LinkBtn>
            </RightBox>
            </ListHeader>
            <Flex>
                {children}
            </Flex>
        </div>
    )
}
export default List;