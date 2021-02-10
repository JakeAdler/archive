import { Firebase } from '../config/firebase';
import { stopCheck } from './stopCheck'

const saveScrape =  async (articles, sourceName) => {
    try {
        const allSourcesRef = Firebase.firestore().collection('articles').doc('sources');
        const sourceRef = allSourcesRef.collection(sourceName);
        const add = async (article) => {
            const added = await sourceRef.add(article);
    
            console.log('DOC ADDED ==> ' + added.id);
        }

       

        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            const stop = await stopCheck(article, sourceName);
            if (stop) {
                break
            } else {
                await add(article);
            }
        }
        
    } catch(err){
        console.log('Error in saveScrape with source :' + sourceName + err);
    }

}
export { saveScrape }