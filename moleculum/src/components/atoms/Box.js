import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
    space,
    color,
    layout,
    background,
    border,
    position,
    compose,
    variant
} from 'styled-system';
import { themed } from '../../utils/index';


const Box = styled('div')({
    boxSizing: "border-box",
},
    compose(
        space,
        color,
        layout,
        background,
        border,
        position,
        variant
    ),
    themed('Box')
);

Box.propTypes = {
    ...propTypes.space,
    ...propTypes.color,
    ...propTypes.layout,
    ...propTypes.background,
    ...propTypes.border,
    ...propTypes.position,
    ...propTypes.variant
};
export default Box;