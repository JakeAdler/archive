import { createContext } from 'react';

const AppContext = createContext({
    aspects: null,
    setAspects: ()=>{},
    populateAspects: ()=>{},
    addAspect: ()=>{},
    editAspect: ()=>{},
    removeAspect: ()=>{},
    initTotalHours: ()=>{}
});


export default AppContext;
