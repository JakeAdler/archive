import styled from 'styled-components';
import Box from '../Box/Box';
const downArrow = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E";
const Select = styled(Box).attrs(props=>({
    as: 'select'
}))`
    cursor: pointer !important;
    background-color: ${props => props.bg ? props.bg : '#fff'};
    border: ${props => props.noBorder || props.borderBottom || props.borderLeft || props.borderRight || props.borderTop ? 'none' : props.border ? props.border : '1px solid black'};
    ${props => props.borderBottom ? `border-bottom: ${props.borderBottom}`:``};
    ${props => props.borderLeft ? `border-left: ${props.borderLeft}` : ``};
    ${props => props.borderRight ? `border-right: ${props.borderRight}` : ``};
    ${props => props.borderTop ? `border-top: ${props.borderTop}` : ``};
    color: ${props => props.color ? props.color : '#000'};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: .2em 1.7em .2em .2em;
    background-image: url(${downArrow});
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    &:focus {
        outline: 0;
    }
`
Select.defaultProps = {
    border: '1px solid #000'
}
/** @component */
export default Select;