import React, { useState, useRef } from 'react';
import { DndProvider } from 'react-dnd-cjs';
import HTML5Backend from 'react-dnd-html5-backend-cjs';
import SourceMenu from './SourceMenu';
import NewsViewer from './NewsViewer';

const NewsContainer = () => {
    const SourceMenuRef = useRef();

    const _resetSourceState = () => {
        SourceMenuRef.current.resetState();
    }
    return(
        <div>
            <DndProvider backend={HTML5Backend}>
                <SourceMenu ref={SourceMenuRef}/>
                <NewsViewer onClear={_resetSourceState}/>
            </DndProvider>
        </div>
    )
}
export default NewsContainer;
