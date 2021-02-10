import styled from 'styled-components';
import Box from '../Box/Box';

const TextArea = styled(Box).attrs(props=>({
    as: 'textarea',
    placeholder: `${props.placeholder} + ${props => props.required ? '*' : ''}`
}))`
border: ${props => props.border ? props.border : props.noBorder ? 'none' : '1px solid #000'};
${props => props.borderBottom ? `border-bottom: ${props.borderBottom}`:``};
${props => props.borderLeft ? `border-left: ${props.borderLeft}` : ``};
${props => props.borderRight ? `border-right: ${props.borderRight}` : ``};
${props => props.borderTop ? `border-top: ${props.borderTop}` : ``};
&:focus {
    outline: 0;
}
`
TextArea.defaultProps =  {
    borderRadius: '3px'
}
/** @component */
export default TextArea