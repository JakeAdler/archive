import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
    typography
} from 'styled-system';
import { themed } from '../../utils/index';
import Box from './Box';

const Button = styled(Box)({
    appearance: 'none',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer'
},
    typography,
    themed('Button')
);

Button.propTypes = {
    ...propTypes.typography
}

Button.defaultProps = {
    display: 'inline-block',
    p: 2,
    border: '1px solid #000',
}
export default Button;