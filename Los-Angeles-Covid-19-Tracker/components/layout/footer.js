import React from 'react';
import styled from 'styled-components';
import { darkGrey } from '../../assets/styles/colors';

export default ({data}) => {
    const wikiSource = 'https://en.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data/United_States/California/Los_Angeles_County_medical_cases_chart'
    const countySource = 'http://publichealth.lacounty.gov/media/Coronavirus/'
    const { updatedAt } = data[0];
    const date = new Date(updatedAt);
    const m = date.getMonth();
    const d = date.getDate();
    const h = (date.getHours() + 24) % 12 || 12;
    const mins = date.getMinutes();
    let ampm;
    if (date.getHours() < 12) {
        ampm = 'AM'
    } else {
        ampm = 'PM'
    }
    return(
        <Footer>
            <Updated><Circle/> <p>Updated at: {m}-{d} at {h}:{mins} {ampm}</p></Updated>
            <Sources>
                <SourceLable>Sources: </SourceLable>
                <div>
                <Source href={wikiSource}>
                    Wikipedia: Los Angeles County Coronavirus Cases
                </Source>
                <Source href={countySource} style={{marginTop: '5px'}}>
                    Los Angeles Department of Public Health
                </Source>
                </div>
            </Sources>
            <p>Created by <Source href='https://github.com/JakeAdler/Los-Angeles-Covid-19-Tracker' style={{display: 'inline-block'}}>Jake Adler</Source></p>
        </Footer>
    )

}

const Footer = styled.div`
    margin: 25px auto 15px;
    padding: 0px 15px;
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    background-color: ${darkGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Sources = styled.div`
    display: flex;
`
const SourceLable = styled.p`
    margin-right: 5px;
`

const Source = styled.a`
    color: #03a1fc;
    display: block;
`
const Circle = styled.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: green;
    box-sizing: border-box;
    margin-right: 3px;
`
const Updated = styled.div`
    display: flex;
    align-items: center;
`