---
title: GatsbyJS + Netlify CMS = 😍
description: How to create a blog, the right* way.
date: '2019-06-13T01:34:33+00:00'
---

As my first post, I thought I'd talk about the process of making this blog.

After a few weeks of playing with [GatsbyJS](https://www.gatsbyjs.org), it was a no-brainer that I was going to build this blog using it. For my use case, there were a lot of benefits that came with Gatsby, they can be boiled down to 2 main catagories:
- Speed
    - Prefetching and Automatic code splitting.
    - Code served as a static site, but [rehydrates](https://www.gatsbyjs.org/docs/production-app/) into a react app, which allows you to do very dynamic things within your static site.
- Development Simplicity
    - Out of the box, gatsby comes with hot loading (webpack 4), Babel 7, Graphql, and Reach Router.
    - Since Gatsby is an Static Site Generator (SSG), there is no need to write any server-side code,
    just host your code on any static site.
        - This also means that you can host your website for free on any static site hosting service such as [Github Pages](https://pages.github.com/), however I recommend [Netlify](https://www.netlify.com) but more on that later
    - The Gatsby ecosystem is large and growing, with over 900 plugins and almost 200 starters that provide templates for many different use cases.

But these things alone are not enough to convince me that this is the right* way to build a blog... What about the content? Where does it come from? We know Gatsby can pull data from any API or CMS, so getting our data from Wordpress or Contentful would not be a problem, but there is an easier way.

Netlify CMS is an open-source content management system that is tailored for SSG's. Despite it's name, Netlify CMS is a separate entity from Netlify (the static site hosting service), it is an open-source project started by the team at Netlify. Netlify CMS hosts your content inside your Git repository, so your only storage limits are the ones set by your Git provider (Github allows up to 1gb). It provides an extensible web-based UI that include standard CMS features such as drag-and-drop file upload, text editor, and other UI widgets. After completing the [setup](https://www.netlifycms.org/docs/add-to-your-site/) (~5-10 mins), you must setup authentication so that only authenticated users can access the CMS. Although Netlify CMS support many different backend authentication services, using Netlify allows for a seamless setup process using [Netlify Identity](https://www.netlify.com/docs/identity/). After connecting your Git account, you are good to go! Simply go to the route that you set up in configuration and you will be prompted to sign in with your github account.

This combination of technologies made it really easy to finish a project that would otherwise cause headaches. 

\* let {right} = opinionated