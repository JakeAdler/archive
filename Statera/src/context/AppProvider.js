import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import AppContext from './AppContext';

export default function AppContextProvider(props) {
    const { children } = props;
    const [aspects, setAspects] = useState([]);

    const initTotalHours = () => {
        const reduced = aspects.reduce((accumulator, current)=>{
            return accumulator + current
        }, 0);
        return 24 - reduced;
    }

    const populateAspects = async (systemAspects) => {
        try {
            const stored = await AsyncStorage.getItem('aspects');
            const parsed = JSON.parse(stored);
            if (systemAspects === null && parsed === null){ 
                setAspects([]);
                return [];
            } else if (systemAspects && parsed.length){
                setAspects([...systemAspects, ...parsed]);
                return [...systemAspects, ...parsed]

            } else {
                setAspects(parsed);
                return parsed;
            }
            
    
        } catch(err){
            console.log(err);
        }
    }
    
    const addAspect = async (toBeAdded) => {
        try {
            let stringified;
            if (aspects.length === 0) {
                setAspects([toBeAdded]);
                stringified = JSON.stringify([toBeAdded]);
            } else {
                setAspects([...aspects, toBeAdded]); 
                stringified = JSON.stringify([...aspects, toBeAdded]);
            }
            await AsyncStorage.setItem('aspects', stringified);
            return JSON.parse(stringified);
        } catch(err) {
            console.log(err)
        }
        
    }

    const editAspect = async (original, edited) => {
        try {
            const index = aspects.indexOf(original);
            const aspectCopy = [...aspects];
            //TODO: if edited aspect property from original does not exist in edited, write that property over to edited.
            //Edit can only change: 
            // [name, description, startedAt]
            aspectCopy[index] = edited;
            setAspects(aspectCopy);
            const stringified = JSON.stringify(aspectCopy);
            await AsyncStorage.setItem('aspects', stringified);
            return aspectCopy;
        } catch (err) {
            console.log(err);
        }
 
    }

    const removeAspect = async (toBeRemoved) => {
        try {
            const index = aspects.indexOf(toBeRemoved);
            const aspectCopy = [...aspects];
            aspectCopy.splice(index, 1);
            setAspects(aspectCopy);
            const stringified = JSON.stringify(aspectCopy);
            await AsyncStorage.setItem('aspects', stringified);
            console.log("STATE POST DELETE -- ", aspects);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <AppContext.Provider value={{
            aspects: aspects,
            setAspects: setAspects,
            populateAspects: populateAspects,
            addAspect: addAspect,
            editAspect: editAspect,
            removeAspect: removeAspect,
            initTotalHours: initTotalHours
        }}>
            {children}
        </AppContext.Provider>
    )
};
