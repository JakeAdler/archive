import React from 'react';
import styled from 'styled-components';
import { darkGrey, blue } from '../../assets/styles/colors';
import numberWithCommas from '../../utils/numberWithCommas';
import Counter from './Counter';

export default ({data}) => {
   
    const totalInfected = numberWithCommas(data[0].countyInfections)

    return( 
        <Counter count={totalInfected} type='infections'/>
    )
}
