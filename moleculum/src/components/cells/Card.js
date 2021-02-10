import styled from 'styled-components';
import { Box, Text } from '../atoms/index';
import { themed } from '../../utils/index';

const Card = styled(Box)({ 
    display: 'flex',
    flexDirection: 'column'
},
    themed('Card')
)

Card.Heading = styled(Text)`
    color: inherit;
    font-size: 1.25em;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
`
Card.Body = styled(Text)`
    color: inherit;
    font-size: 0.80em;
    font-weight: 400;
`

Card.defaultProps = {
    p: 3,
    border: '2px solid #000',
    display: 'inline-block',
    maxWidth: '300px',
    borderRadius: '5px;'
}

export default Card;