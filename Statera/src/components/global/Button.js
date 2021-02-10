import React, {forwardRef} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const Button = styled.TouchableOpacity`
    width: 100px;
    height: 35px;
    background-color: ${props => props.theme.button.default };
    border-radius: 5px;
`
const Inner = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default forwardRef(({children, className, style, textStyles, ...rest}, ref)=>(
    <Button className={className} style={style} ref={ref} {...rest}>
        <Inner>
            <Text>{children}</Text>
        </Inner>
    </Button>
))