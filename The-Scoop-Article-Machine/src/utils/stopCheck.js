import { Firebase } from '../config/firebase';

const stopCheck = async (article, sourceName) =>{
    const sourceRef = Firebase.firestore().collection('articles').doc('sources').collection(sourceName);
    const snapshot = await sourceRef.where('title', '==', article.title).get();
    if (snapshot.empty){
        console.log('ALL DOCS ADDED --- NONE EXISTED IN DB');
        return false;
    } else {
        //TODO: get data for article that triggered query;\
        console.log('EXIT -- THIS ARTICLE EXISTS IN ' + sourceName )
        return true;
    }
}
export { stopCheck }