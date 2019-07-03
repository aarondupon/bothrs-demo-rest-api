import React, {useContext} from 'react'
import styled from 'styled-components';
import H3 from '../../core/text/H3';

const Flex = styled.div `
    display:flex;
    flex-direction:row;
    width:${props => props.width || '100%'};
    height:${props => props.height || '403px'};
    /* border:solid 1px red; */
    align-items: flex-start;
`

const ListHeader = styled.div `
    padding: 0px 30px;
`
const List = ({children, source, listTitle}) => {
    return (
        <div>
            <ListHeader>
            <H3  >{listTitle || 'Huishoudtoestellen'}</H3>
            </ListHeader>
            <Flex>
                {children}
            </Flex>
        </div>
    )
}
export default List;