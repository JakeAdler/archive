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
        <FlexWrapper>
            <Header/>
                <Flex>
                    <LeftCol>
                        <InfectionsCounter data={metaData}/>
                        <DeathsCounter data={metaData}/>
                        <List data={neighborhoodData.requestedNeighborhoods}/>
                    </LeftCol>

                    <CenterCol>
                        <Map data={geoData}/>  
                    </CenterCol>

                    <RightCol>
                        <InfectionsGraph data={historicalData} />
                        <DeathsGraph data={historicalData} />
                    </RightCol>
                    
                </Flex>
            <Footer data={metaData}/>
        </FlexWrapper>
    )
}

const FlexWrapper = styled.div`
    width: 98%;
    height: auto;
    margin: 0 auto;
`
const Flex = styled.div`
    display: flex;
    height: auto;
    height: 800px;
    justify-content: space-between;
    align-items: flex-start;
`
const Col = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    height: 100%;
`
const LeftCol = styled(Col)`
    width: 18%;
`
const CenterCol = styled(Col)`
    width: 47%;
`
const RightCol = styled(Col)`
    width: 33%;
`