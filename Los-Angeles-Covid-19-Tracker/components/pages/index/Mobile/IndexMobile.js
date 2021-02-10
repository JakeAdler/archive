import React from 'react';
import styled from 'styled-components';
import Header from '../../../layout/Header';
import Map from '../../../map/Map';
import InfectionsGraph from '../../../graphs/InfectionsGraph';
import DeathsGraph from '../../../graphs/DeathsGraph';
import InfectionsCounter from '../../../counters/InfectionsCounter';
import DeathsCounter from '../../../counters/DeathsCounter';
import List from '../../../list/list';
import Footer from '../../../layout/footer'

export default ({data}) => {
    
    const {
        metaData,
        neighborhoodData,
        geoData,
        historicalData
    } = data;

    return(
        <MobileFlex>
        <Header/>

        <MobileSectionOne>
            <MobileCounterWrapper>
                <InfectionsCounter data={metaData}/>
            </MobileCounterWrapper>
            <MobileCounterWrapper>
                <DeathsCounter data={metaData}/>
            </MobileCounterWrapper>
        </MobileSectionOne>

        <MobileSectionTwo>
            <Map data={geoData} />
        </MobileSectionTwo>

        <MobileSectionThree>
            <InfectionsGraph data={historicalData} />
            <DeathsGraph data={historicalData} />
            <List data={neighborhoodData.requestedNeighborhoods}/>
        </MobileSectionThree>

    </MobileFlex>
    )
}

const MobileFlex = styled.div`
    display: flex;
    flex-flow: column;
    width: 90%;
    height: 100%;
    margin: 15px auto;
`
const MobileSectionOne = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 10px;
`
const MobileSectionTwo = styled.div`
    width: 100%;
    height: 580px;
    margin: 15px 0px 0px;
`
const MobileSectionThree = styled.div`
    width: 100%;
    height: 1410px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 22px 0px 0px;
`
const MobileCounterWrapper = styled.div`
    width: 48%;
    height: 100%;
`