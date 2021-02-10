import { MozillaParse, AwwwardsParse, PerconaParse, SmashingParse } from '../parsers';

const sources = [
    {
        name: "Mozilla Blog",
        parser: MozillaParse,
        category: "Web",
        url: "https://blog.mozilla.org/"
         
    },
    {
        name: "Awwwards",
        parser: AwwwardsParse,
        category: "Design",
        url: "https://www.awwwards.com/websites/"
        
    },
    {
        name: "Percona",
        parser: PerconaParse,
        category: "Software",
        url: "https://www.percona.com/blog/"
    },
    {
        name: "Smashing",
        parser: SmashingParse,
        category: "Software",
        url: "https://www.smashingmagazine.com/articles/"
    }
]

export default sources;