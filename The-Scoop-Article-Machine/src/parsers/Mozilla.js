import puppeteer from 'puppeteer';

const ParseMozilla = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const parseArticles = await page.evaluate(()=>{
            const articleList = document.querySelectorAll('article.post');
            const allAuthors = document.querySelectorAll('address.vcard');
            const allTitles = document.querySelectorAll('h2.entry-title');
            const allLinks = document.querySelectorAll('a.entry-link');
            const allTimestamps = document.querySelectorAll('time.published');
            const allSummaries = document.querySelectorAll('div.entry-summary');
            let allArticles = []
            for (let i = 0; i < articleList.length; i++) {
                let model = {
                    author: allAuthors[i].innerText,
                    title: allTitles[i].innerText,
                    summary: allSummaries[i].children[0].innerText,
                    timestamp: allTimestamps[i].getAttribute('datetime'),
                    link: allLinks[i].getAttribute('href')
                }
                allArticles.push(model);
            }
            return allArticles
        })  
        // console.log(parseArticles);
        await page.close();
        await browser.close();
        return parseArticles
        
        
    } catch(err) {
        console.error('Error parsing Mozilla URL: ' + url + 
        + '\n' + 'Error: ' + err);
    } 
}

export default ParseMozilla;