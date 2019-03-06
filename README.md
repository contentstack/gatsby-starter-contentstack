
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

## Update Contentstack config 

Update the gatsby-config.js file with your Contentstack stack details:

```javascript
plugins: [
  {
    resolve: `gatsby-source-contentstack`,
    options: {
      // API Key is a unique key assigned to each stack. This is required.
      api_key: `api_key`,
      // Access Token is a read-only credential . This is required.
      access_token: `access_token`,
      // Environment where you published your data.
      environment: `environment`
    },
  },
]
```
## Create pages

You can now create pages for your website. Refer to our [Contentstack Gatsby starter tutorial](https://www.contentstack.com/docs/example-apps/getting-started-with-gatsby-and-contentstack) to learn how to create content for your pages. 



**More resources:**

- [Contentstack documentation](https://www.contentstack.com/docs/)
- [Contentstack + Gatsby app tutorial](https://www.contentstack.com/docs/example-apps/build-a-static-website-using-gatsby-and-contentstack)