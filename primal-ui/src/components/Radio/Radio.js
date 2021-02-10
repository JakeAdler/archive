import styled from 'styled-components';
import Box from '../Box/Box';

const Radio = styled(Box).attrs(props => ({
    as: 'input',
    type: 'radio',
    name: props.name
}))`
    display: inline-block;
    cursor: pointer;
    appearance: none;
    vertical-align: text-top;
    height: 15px;
    width: 15px;
    line-height: 15px;
    background-color: ${props => props.bg ? props.bg : 'transparent'};
    border: ${props => props.border ? props.border : '1px solid #000'};
    border-radius: 50%;
    margin-right: ${props => props.mr ? props.mr : '4px'};
    &:focus {
        outline: none;
    }
    &:checked {
        background: ${props => {
            if (props.fillBg && props.dotColor) {
                return `${props.fillBg} center url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='${props.dotColor}' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>") no-repeat border-box`
            } else if (props.fillBg) {
                return `${props.fillBg} center url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>") no-repeat border-box` 
            } else if (props.dotColor) {
                return `blue center url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='${props.dotColor}' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>") no-repeat border-box`
            } else {
                return  `blue center url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>") no-repeat border-box`
            }
        }}
    }
`
/** @component */
export default Radio;