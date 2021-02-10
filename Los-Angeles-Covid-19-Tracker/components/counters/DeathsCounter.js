import React from 'react';
import numberWithCommas from '../../utils/numberWithCommas';
import Counter from './Counter';

export default ({data}) => {
    const totalDeaths = numberWithCommas(data[0].countyDeaths)
    return( 
        <Counter count={totalDeaths} type='deaths'/>
    )
}
