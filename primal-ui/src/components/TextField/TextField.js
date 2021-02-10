import styled from 'styled-components';
import { border} from 'styled-system'
import Box from '../Box/Box';

const TextField = styled(Box).attrs(props=>({
    as: 'input',
    type: 'text',
    placeholder: `${props.placeholder }${props => props.required ? '*' : ''}`
}))`
    border: ${props => props.noBorder || props.borderBottom || props.borderLeft || props.borderRight || props.borderTop ? 'none' : props.border ? props.border : '1px solid black'};
    ${props => props.borderBottom ? `border-bottom: ${props.borderBottom}`:``};
    ${props => props.borderLeft ? `border-left: ${props.borderLeft}` : ``};
    ${props => props.borderRight ? `border-right: ${props.borderRight}` : ``};
    ${props => props.borderTop ? `border-top: ${props.borderTop}` : ``};
    background-color: ${props => props.bg ? props.bg : '#fff'};
    padding: ${props => props.p ? props.p : '3px 3px 3px 5px'};
    cursor: text;
    &:focus {
        outline: 0;
    }
`
TextField.defaultProps = {
    borderRadius: '3px',
}
/** @component */
export default TextField


