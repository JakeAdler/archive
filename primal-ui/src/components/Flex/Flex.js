import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Box from '../Box/Box';

const Flex = styled(Box)`
    display: flex;
    ${flexbox};
`
/** @component */
export default Flex;