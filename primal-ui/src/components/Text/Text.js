import styled from 'styled-components';
import { 
    compose,
    space,
    layout,
    typography,
    color
} from 'styled-system';

const Text = styled.p`
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, system-ui, Helvetica, sans-serif;
    font-size: 0.8rem;
    ${compose(
        space,
        layout,
        typography,
        color,
    )};
`
/** @component */
export default Text;