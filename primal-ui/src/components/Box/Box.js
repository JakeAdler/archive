import styled from 'styled-components';
import { 
    compose,
    space,
    layout,
    typography,
    color,
    border,
    position
} from 'styled-system';

const Box = styled.div`
    display: block;
    box-sizing: border-box;
    font-family: Arial, system-ui, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin: 0;
    ${compose(
        space,
        layout,
        typography,
        color,
        border,
        position
    )};
`


/** @component */
export default Box;