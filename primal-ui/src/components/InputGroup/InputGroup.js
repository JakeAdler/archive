import styled from 'styled-components';
import { flexbox } from 'styled-system'
import Box from '../Box/Box';

/**
 * @visibleName Input Group
 */
const InputGroup = styled(Box)`
    display: inline-flex;
    ${flexbox};
`

/** @component */
export default InputGroup;