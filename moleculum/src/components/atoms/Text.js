import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
    typography,
} from 'styled-system';
import { themed } from '../../utils/index';
import Box from './Box';

const Text = styled(Box)(
    typography,
    themed('Text')
);

Text.propTypes = {
    ...propTypes.typography,
}
export default Text;