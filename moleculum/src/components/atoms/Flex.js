import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
    flexbox
} from 'styled-system';
import { themed } from '../../utils/index';
import Box from './Box';

const Flex = styled(Box)({
    display: 'flex'
},
    flexbox,
    themed('Flex')
);


Flex.propTypes = {
    ...propTypes.flexbox,
}
export default Flex;
