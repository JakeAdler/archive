import puppeteer from 'puppeteer';

const ParseSmashing = async (url) => {
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        
        const parseArticles = await page.evaluate(()=>{
            const articleList = document.querySelectorAll('article.article--post');
            const allAuthors = document.querySelectorAll('span.article--post__author-name');
            const allTitles = document.querySelectorAll('h1.article--post__title');
            const allTimestamps = document.querySelectorAll('time.article--post__time');
            const allSummaries = document.querySelectorAll('p.article--post__teaser');
            const allArticles = [];
            for (let i = 0; i < articleList.length; i++) {
                let model = {
                    author: allAuthors[i].children[0].innerText,
                    title: allTitles[i].children[0].innerText,
                    summary: allSummaries[i].text,
                    timestamp: allTimestamps[i].getAttribute('datetime'),
                    link: `https://www.smashingmagazine.com${allTitles[i].children[0].getAttribute('href')}`
                };
                allArticles.push(model);
            }
            return allArticles;
        })
        await page.close();
        await browser.close();
        return parseArticles;

    } catch(err){
        console.error('Error parsing Smashing URL: ' + url + 
        + '\n' + 'Error: ' + err);
    }
}

export default ParseSmashing;