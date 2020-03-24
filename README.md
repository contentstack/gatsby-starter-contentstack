
# gatsby-starter-contentstack

A starter project for building a websites using Contentstack and Gatsby 

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

Copy the `.env.sample` file to `.env.development` and `.env.production` and update with your Contentstack details, including your API key and access token.

It should end up looking something like:

```
CONTENTSTACK_API_KEY='hunter2'
CONTENTSTACK_DELIVERY_TOKEN='hunter2token'
CONTENTSTACK_ENVIRONMENT='development' # or production, staging, etc.
```

## Create pages

You can now create pages for your website. Refer to our [Contentstack Gatsby starter tutorial](https://www.contentstack.com/docs/example-apps/getting-started-with-gatsby-and-contentstack) to learn how to create content for your pages. 



**More resources:**

- [Contentstack documentation](https://www.contentstack.com/docs/)
- [Contentstack + Gatsby app tutorial](https://www.contentstack.com/docs/developers/sample-apps/build-a-sample-website-using-gatsby-and-contentstack)
