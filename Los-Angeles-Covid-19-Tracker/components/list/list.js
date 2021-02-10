import React, {useState} from 'react';
import styled from 'styled-components';
import { darkGrey, blue } from '../../assets/styles/colors';



export default ({data}) => {
    const [neighborhoods, setNeighborhoods] = useState(data);
    const [inputVal, setInputVal] = useState('');

    const handleSearchChange = (e) => {
        
        if (e.length < inputVal.length) {
            console.log('delete!!')
            console.log(e);
            setInputVal(e);
            setNeighborhoods(data);
            return;
        }
        setInputVal(e);

        const results = neighborhoods.filter(({city})=>{
            if (city.toLowerCase().includes(e.toLowerCase())) {
                return city
            } else {
                return false;
            }
        });

        setNeighborhoods(results);

    }
    return(
        <List>
            <Header>
                Confrimed Cases by Neighborhood
            </Header>
            <SearchInput 
            placeholder='&#128269; Search'
            onChange={(e) => {handleSearchChange(e.target.value)}}
            value={inputVal}
            />
            <ListBody>
                {
                    neighborhoods.map(({infections, city}, i)=>{
                    
                        return(
                            <ListItem key={`${city}-${i}`}>
                                <ListLabel>{city}</ListLabel><ListData>{infections}</ListData>

                            </ListItem>
                        )
                    })
                }
               
            </ListBody>
        </List>
    )
};

const List = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${darkGrey};
    box-sizing: border-box;
    align-items: center;
`
const Header = styled.div`
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    text-align: center;
    padding: 15px 0px;
    box-sizing: border-box;
`

const SearchInput = styled.input`
    box-sizing: border-box;
    height: 35px;
    width: 90%;
    border: none;
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: ${darkGrey};
    color: #fff;
    font-size: 1rem;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #fff;

    }
`
const ListBody = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px 15px;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
    box-sizing: border-box;
    scrollbar-face-color: #367CD2;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
        margin-right: 2px;
        color: #fff;
    }

    &::-webkit-scrollbar-thumb {
        height: 30px;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }
`
const ListItem = styled.div`
    height: 30px;
    width: 100%;
    border-bottom: 1px solid #fff;
    padding: 0px 5px 2px 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
`
const ListLabel = styled.h4`
    margin-right: 5px;
    display: inline;
`
const ListData = styled.span`
    font-weight: bolder;
    display: inline-block;
    color: ${blue};
`