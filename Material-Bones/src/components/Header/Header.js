import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Flex from '../Flex/Flex';

const HeaderPaper = styled(Paper)`
    width: 100vw;
    height: 86px;
`
const Header = ({brand}) => {
    return(
        <HeaderPaper>
            <Flex>
                <h1>Logo</h1>
            </Flex>
            <Button variant='danger'>test</Button>
        </HeaderPaper>
    )
}

Header.propTypes = {
    brand: PropTypes.node.isRequired,
}

export default Header;