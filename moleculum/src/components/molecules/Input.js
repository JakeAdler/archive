import styled from 'styled-components';
import { Text } from '../atoms/index';
import { themed } from '../../utils/index';

const Input = styled(Text).attrs(props => ({
    type: props.type ? props.type : 'text',
  },
    themed('Input')
  ))`
    border: none;
    border-bottom: 1px solid ${props => props.borderBottomColor ? props.borderBottomColor : '#000'};
    background-color: transparent;
    display: block;
    margin: 0 0 1em;
    height: 1.5rem;
    caret-color: ${props => props.caretColor ? props.caretColor : '#000'};
    ::placeholder {
      font-size: 1rem;
      color: ${props => props.placeholderColor ? props.placeholderColor : '#000'};
    }
    &:focus {
        outline: 0;
    }
  `

Input.defaultProps = {
    as: 'input'
}

export default Input;