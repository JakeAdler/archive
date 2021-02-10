import React, { useState } from 'react';
import styled from 'styled-components';
import Surface from '../global/Surface';
import { useDrop } from 'react-dnd-cjs'
import ItemTypes from './ItemTypes';
import Source from './SourceContent';
import { MdBlock } from 'react-icons/md';


const Prompt = styled.div`
    padding: 25px;
    border: 2px dashed #000000;
    margin-top: auto;
    margin-bottom: auto;
`
const Container = styled(Surface)`
    position: relative;
    width: 70vw;
    padding: 25px;
    margin: 0 auto;
    height: 70vh;
    white-space: nowrap;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow-x: scroll;
`

const ScrollContainer = styled.div`
    margin-left: 1px;
`

const ClearBtn = styled.div`
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
`

const NewsViewer = (props) => {
    const { onClear } = props;
    const [sources, setSource] = useState([]);
    const [{}, drop ] = useDrop({
        accept: ItemTypes.SOURCE,
        drop: (item) => {
            _onDrop(item);
            return(item.sourceObj);
        },
    })

    const _onDrop = (item) =>{
        setSource([...sources, item.sourceObj]);
    }

    const _clear = () => {
        setSource([])
        onClear();
    }
    
    const _popFromViewer = (item) => {
        const i = sources.indexOf(item.source);
        sources.splice(i, 1);
        setSource([...sources]);
    }
    

    return(
        <div ref={drop}>
            <Container>
                {
                    sources.length === 0 ?
                    <Prompt>Drop A Source Here</Prompt>
                    :
                    <>
                    <ClearBtn onClick={_clear}>
                        Clear <MdBlock/>
                    </ClearBtn>
                    <ScrollContainer>
                    { 
                        sources.map((source, i)=>(
                            <Source source={source} key={i} _pop={_popFromViewer}/>
                        ))
                    }
                    </ScrollContainer>
                    </>
                }
            </Container>
            </div>
      
    )
}

export default NewsViewer;