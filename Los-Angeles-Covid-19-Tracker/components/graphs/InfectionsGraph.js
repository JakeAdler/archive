import React, { useState } from 'react';
import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line'
import { blue, darkGrey } from '../../assets/styles/colors';
import CommonProps from './CommonProps';

export default ({data}) => {
    const [graphType, setGraphType] = useState('total');

    const parseDate = (d) => (d.substring(5,10));
    const infectionsArr = data.map(({infections, date})=>({
            x: parseDate(date),
            y: infections   
    }));

    const infectionsData = [{
        id: 'Cases',
        color: blue,
        data: infectionsArr
    }];
    const newInfectionsArr = data.map(({newInfections, date})=>{
        return({
            x: parseDate(date),
            y: newInfections
        })
    })
    const newInfectionsData = [{
        id: 'New Cases',
        color: blue,
        data: newInfectionsArr
    }]

    const _handleButtonClick = (type) => {
        setGraphType(type);
    }
    
    
    return(
        <Wrapper>
            {
                graphType === 'total' ?
                    <ResponsiveLine
                        id='Infections'
                        data={infectionsData}
                        colors={infectionsData[0].color}
                        pointColor={infectionsData[0].color}
                        {...CommonProps}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            legend: '# of Confrimed Cases',
                            legendOffset: -58,
                            legendPosition: 'middle'
                        }}
                    />
                    :
                    <ResponsiveLine    
                        id='NewInfections'
                        data={newInfectionsData}
                        pointColor={infectionsData[0].color}
                        {...CommonProps}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            legend: '# of New Cases',
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
                    Total Cases
                </TotalBtn>
                <NewBtn 
                    type={graphType}
                    onClick={() => {_handleButtonClick('new')}}
                >
                    New Cases
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