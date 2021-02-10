import { Firebase } from '../../../config/firebaseconfig';

const getArticles = async (sourceName) => {
    const sourceRef = Firebase.firestore().collection('articles').doc('sources').collection(sourceName).orderBy('timestamp', 'desc');
    const articles = await sourceRef.get()
    let allData = [];
    articles.forEach((article)=>{
        const data = article.data()
        allData.push(data)
        
    })
    return allData;
}

export { getArticles }