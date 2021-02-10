import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useDrop } from 'react-dnd-cjs'
import styled from 'styled-components';
import sources from '../../config/sources';
import SourceThumbnail from './SourceThumbnail';
import Flex from '../global/Flex';
import Surface from '../global/Surface';
import colors from '../../assets/styles/colors';
import ItemTypes from './ItemTypes';


const Menu = styled(Surface)`
    padding: 15px 25px;
    height: 70px;
    width: calc(70vw + 50px);
    margin: 15px auto;
    background-color: ${colors.primary};
    overflow-x: scroll;
    box-sizing: border-box;
`

const MenuFlex = styled(Flex)`
    overflow-x: scroll;
`

const SourceMenu = forwardRef((props, ref) => {

    const [ sourceList, setSourceList ] = useState([...sources]);

    useImperativeHandle(ref, ()=>({
        resetState() {
            setSourceList([...sources]);
        }
    }))

    const _onSourceDrop = item => {
        setSourceList([...sourceList, item.source])
        console.log('STATE ====> ' + sourceList)
    }

    const [{}, dropMenu] = useDrop({
        accept: ItemTypes.SOURCE,
        drop: (item) => {
            _onSourceDrop(item)
            console.log('DROPPED SOURCE BACK INTO MENU :' + JSON.stringify(item.source));
            return item;
        }
      })

    const _popFromSourceList = (obj) => { 
        const index = sourceList.indexOf(obj);
        sourceList.splice(index, 1);
        setSourceList([...sourceList]);
    }
    
    return(
        <div ref={dropMenu}>
        <Menu>
            <MenuFlex>
            {
                sourceList.map((source, i)=>{
                    return(
                        <SourceThumbnail sourceObj={source} key={i}
                        _pop={_popFromSourceList} 
                        />
                    )
                })
            }
            </MenuFlex>
        </Menu>
        </div>
    )
});

export default SourceMenu;