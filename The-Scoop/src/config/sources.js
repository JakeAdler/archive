import {
    AwwwardsTheme, 
    MozillaBlogTheme, 
    PerconaTheme,
    SmashingTheme
} from '../assets/styles/sourceThemes/index';

const sources = [
    {
        name: 'Mozilla Blog',
        link: 'https://blog.mozilla.org/',
        theme: MozillaBlogTheme,
        logo: require('../assets/images/sourceLogos/MozillaBlogLogo.svg')
    },
    {
        name: 'Percona',
        link: 'https://www.percona.com/blog/',
        theme: PerconaTheme,
        logo: require('../assets/images/sourceLogos/PerconaLogo.svg')
    },
    {
        name: 'Awwwards',
        link: 'https://www.awwwards.com',
        theme: AwwwardsTheme,
        logo: require('../assets/images/sourceLogos/AwwwardsLogo.svg')
    },
    {
        name: 'Smashing',
        link: 'https://www.smashingmagazine.com/articles/',
        theme: SmashingTheme,
        logo: require('../assets/images/sourceLogos/SmashingLogo.png')

    }
];

export default sources;