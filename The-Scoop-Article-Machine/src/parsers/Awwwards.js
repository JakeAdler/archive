import puppeteer from 'puppeteer';

const ParseAwwwards = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url,  {"waitUntil" : "networkidle0"});
        const parseArticles = await page.evaluate(()=>{

        const allArticles = document.querySelectorAll('li.js-collectable');
        const allAuthors = document.querySelectorAll('div.by');
        const allBoxPhoto = document.querySelectorAll('div.box-photo');
        let articles = [];
        for(let j = 0; j < allArticles.length; j++){
            // weird HTML on awwwards makes this hack necessary 
            let z = j + 6;
            const img =  allBoxPhoto[z].children[0].dataset.srcset;
            const data = allArticles[j].getAttribute('data-model');
            const Data = JSON.parse(data);
            const author = allAuthors[j].children[0].children[0].innerText;
            const link = `https://www.awwwards.com/sites/${Data.slug}`
            const timestamp = new Date(Data.createdAt*1000)
            const model = {
                img: img,
                title: Data.title,
                author: author,
                timestamp: timestamp.toISOString(),
                link: link
            }
            articles.push(model);
        }
            
            return articles;
        })
        // console.log(parseArticles);
        await page.close();
        await browser.close();
        return parseArticles
        
     
    } catch(err){
        console.log('Error parsing Awwwards URL: ' + url + 
        + '\n' + 'Error: ' + err)
    } 
}

export default ParseAwwwards;