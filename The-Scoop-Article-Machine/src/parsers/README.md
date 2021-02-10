Try to sort articles in chronological order using puppeteer so that we can check if a doc exists in the DB and if it does not add the rest of the articles from that scrape. (Refer to as stop-check).
Eventually we should try to implement some type of flag for each source that indicates whether articles are sortable or not so that we could either use stop-check or individually check each doc
against db.


Parsers to add:
- Smashing https://www.smashingmagazine.com/articles/
- A List Apart https://alistapart.com/articles/
- SpeckyBoy https://speckyboy.com/