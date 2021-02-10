import React from 'react';
import styled from 'styled-components';
import { Text, Box } from '../atoms/index';
// import { themed } from '../../utils/index';

const StyledList = styled(Box)`

`
StyledList.defaultProps = {
    as: 'ul'
};

const List = {}

List.Container = (props) => {
    const {
        className,
        style,
        children,
        ...rest
    } = props;
    const heading = React.Children.toArray(children).filter(child => child.displayName === 'List.Item')

    return(
        <Box>
            {heading}
            <StyledList className={className} style={style} {...rest}>
                {children}
            </StyledList>
        </Box>
    )
}

List.Container.displayName = 'List.Container'

List.Heading = styled(Text)`

`
List.Heading.defaultProps = {
    as: 'h2'
}
List.Item = styled(Text)`
    text-align: left;
    list-style-type: ${props => props.noBullet ? 'none' : 'disc'};
    list-style-position: inside;
`
List.Item.defaultProps = {
    as: 'li',
    pl: '10px'
}

export default List;