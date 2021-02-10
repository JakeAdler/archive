import styled from 'styled-components';
import Text from '../Text/Text';

const Label = styled(Text).attrs(props =>({
    as: 'label',
    htmlFor: props.for
}))`
    cursor: text;
    vertical-align: top;
`
/** @component */
export default Label    