import puppeteer from 'puppeteer';

const ParsePercona = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const parseArticles = await page.evaluate(()=>{
            const articleList = document.querySelectorAll('.post-full');
            const allAuthors = document.querySelectorAll('.co-author-display-name');
            const dayPosted = document.querySelectorAll('.day');
            const monthPosted = document.querySelectorAll('.month');
            const yearPosted = document.querySelectorAll('.year');
            const titleContainer = document.querySelectorAll('.entry-title');
            const allSummaryContainer = document.querySelectorAll('.col-sm-9');
            let allArticle = [];
            for (let i = 0; i < articleList.length; i++ ){
                const day = dayPosted[i].innerText;
                const month = monthPosted[i].innerText;
                const year = yearPosted[i].innerText;
                const time = day + ' ' + month + ' ' + year;
                const d = new Date(time)
                const summary = allSummaryContainer[i].children[2].innerText;
                const timestamp = d.toISOString();
                const model = {
                    author: allAuthors[i].innerText,
                    title: titleContainer[i].children[0].innerText,
                    summary: summary,
                    link: titleContainer[i].children[0].getAttribute('href'),
                    timestamp: timestamp
                }
                allArticle.push(model)
            }
            return allArticle;
        })
        await page.close();
        await browser.close();
        return parseArticles

    } catch(err) {

    }

}

export default ParsePercona;