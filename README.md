[![Contentstack](https://www.contentstack.com/assets/blt440aad5a09c89b2f/contentstack_icon.svg)](https://www.contentstack.com/)


# Create a marketing website using Gatsby

About Contentstack: Contentstack is a headless CMS with an API-first approach that puts content at the centre. It is designed to simplify the process of publication by separating code from content.

About this project: Create professional marketing-themed website using Gatsby.

<img src='https://images.contentstack.io/v3/assets/blt17537f14dafb140d/blt0de852ecba3b1ea3/5f6225e021ecf947895da51e/gatsby-starter-home.png' width='650' height='550'/>
<img src='https://images.contentstack.io/v3/assets/blt17537f14dafb140d/blt42db5af5d6879514/5f6225e5b038186a244b8af0/gatsby-starter-blogs.png' width='650' height='550'/>


## Live Demo

You can check the [live demo](https://gatsby-starter-topaz.vercel.app/) to get first-hand experience of the website.

## Prerequisites

- Install [nodejs](https://nodejs.org/en/) on your system.
- Install Gatsby CLI.  

`npm install -g gatsby-cli`

## Clone the repo

Clone the following repo. It contains all the required dependencies.

`git clone https://github.com/contentstack/gatsby-starter-contentstack.git`

## Install dependencies 

Go to the gatsby-starter-contentstack folder, and run the following:

- `cd gatsby-starter-contentstack`
- `npm install`

This downloads the required files and initializes the site.

## Update Contentstack secrets

Copy the `.env.sample` file to `.env.development` and `.env.production` and update with your Contentstack details, including your API key and delivery token.

It should end up looking something like:

```
CONTENTSTACK_API_KEY='hunter2'
CONTENTSTACK_DELIVERY_TOKEN='hunter2token'
CONTENTSTACK_ENVIRONMENT='publishing environment'
```

## Tutorial

We have created an in-depth tutorial on how you can create a website using Gatsby. By following the steps given in the tutorial, design a website similar to the one given in the demo.

[Create a marketing website using Gatsby](https://www.contentstack.com/docs/example-apps/getting-started-with-gatsby-and-contentstack/)


**More resources:**

- [Contentstack documentation](https://www.contentstack.com/docs/)
- [Contentstack + Gatsby app tutorial](https://www.contentstack.com/docs/developers/sample-apps/build-a-sample-website-using-gatsby-and-contentstack)