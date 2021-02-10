import styled from 'styled-components';
import Box from '../Box/Box';

const Button = styled(Box)`
    color: ${props => props.color ? props.color : props.theme.button ? props.theme.button.color : '#000'};
    border: ${props => props.noBorder || props.borderBottom || props.borderLeft || props.borderRight || props.borderTop ? 'none' : props.border ? props.border : '1px solid black'};
    ${props => props.borderBottom ? `border-bottom: ${props.borderBottom}`:``};
    ${props => props.borderLeft ? `border-left: ${props.borderLeft}` : ``};
    ${props => props.borderRight ? `border-right: ${props.borderRight}` : ``};
    ${props => props.borderTop ? `border-top: ${props.borderTop}` : ``};
    background-color: ${props => props.bg ? props.bg : '#fff'};
    display: ${props => props.display ? props.display : 'inline-block'};
    cursor: pointer;
    padding: ${props => props.p || props.pr || props.pl || props.py || props.px ? props.p || props.pr || props.pl || props.py || props.px : '4px'};
    &:focus {
        outline: 0;
    };
`
Button.defaultProps ={
    border: '1px solid #000',
    borderRadius: '3px',
}
/** @component */
export default Button