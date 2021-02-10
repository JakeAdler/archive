import sources from '../config/sources';
import { saveScrape } from './saveScrape'

const parseSources = () => {
    sources.forEach(async (source)=>{
        const articles = await source.parser(source.url);
        await saveScrape(articles, source.name);
        //console.log(articles);
    })    
}

export { parseSources }