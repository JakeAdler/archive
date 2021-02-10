import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
import styled from 'styled-components';
import { orange, darkGrey } from '../../assets/styles/colors';
import graphTheme from '../../assets/styles/graphTheme';
import CommonProps from './CommonProps';
import numberWithCommas from '../../utils/numberWithCommas';

export default ({data}) => {
    const [graphType, setGraphType] = useState('total');

    const parseDate = (d) => (d.substring(5,10));

    const deathsArr = data.map(({deaths, date})=>({
            x: parseDate(date),
            y: deaths
    }));

    const deathsData = [{
        id: 'Deaths',
        color: orange,
        data: deathsArr
    }];

    const newDeathsArr = data.map(({newDeaths, date})=>{
        return({
            x: parseDate(date),
            y: newDeaths
        })
    })
    const newDeathsData = [{
        id: 'New Cases',
        color: orange,
        data: newDeathsArr
    }]

    const _handleButtonClick = (type) => {
        setGraphType(type);
    }

    return(
            <Wrapper>
                {
                    graphType === 'total' ?
                    <ResponsiveLine
                        id='graph'
                        data={deathsData}
                        colors={deathsData[0].color}
                        pointColor={deathsData[0].color}  
                        {...CommonProps}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            legend: '# of Confrimed Deaths',
                            legendOffset: -58,
                            legendPosition: 'middle'
                        }}
                    />
                :
                    <ResponsiveLine
                        id='graph'
                        data={newDeathsData}
                        colors={deathsData[0].color}
                        pointColor={deathsData[0].color}  
                        {...CommonProps}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            legend: '# of Confrimed Deaths',
                            legendOffset: -58,
                            legendPosition: 'middle'
                        }}
                    />

                }
                <BtnGroup>
                    <TotalBtn 
                        type={graphType}
                        onClick={() => {_handleButtonClick('total')}}
                    >
                        Total Deaths
                    </TotalBtn>
                    <NewBtn 
                        type={graphType}
                        onClick={() => {_handleButtonClick('new')}}
                    >
                        New Deaths
                    </NewBtn>
                </BtnGroup>
            </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
    height: ${(CommonProps.height + 30)}px;
    width: auto;
    background-color: ${darkGrey};
`
const BtnGroup = styled.div`
    position: absolute;
    bottom: 0;
    left: 25px;
    width: 220px;
    height: 25px;
    border-bottom: none;
`
const Btn = styled.button`
    height: 100%;
    width: 50%;
    color: #000;
    border: 1px solid #000;
    border-bottom: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`
const TotalBtn = styled(Btn)`
    background-color: ${props => props.type === 'total' ? 'rgba(255,255,255, .9)' : ' rgba(255,255,255, .4)'};
    border-radius: 5px 0px 0px 0px;
`
const NewBtn = styled(Btn)`
    background-color: ${props => props.type === 'new' ? 'rgba(255,255,255, .9)' : ' rgba(255,255,255, .4)'};
    border-radius: 0px 5px 0px 0px;
`