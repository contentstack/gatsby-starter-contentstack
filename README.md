
# gatsby-starter-contentstack

A starter project for building a websites using Contentstack and Gatsby 

This is a quick, step-by-step starter guide to help you create a sample website using Contentstack and Gatsby.

## Prerequisites

- Install [js](https://nodejs.org/en/) on your system.
- Install Gatsby CLI.  

`npm install --save gatsby-source-contentstack`

## Step 1: Clone the repo

Clone the repo from Github. It contains all the required dependencies.

`git clone https://github.com/contentstack/gatsby-starter-contentstack.git`

## Step 2: npm install

Go to the gatsby-starter-contentstack folder, and run the following:

- `cd gatsby-starter-contentstack`
- `npm install`

This downloads the required files and initializes the site.

## Step 2: Update the config file

Update the gatsby-config.js file with your stack details:

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

## Step 2:  Create and publish content

To build a sample home page, perform the following steps in Contentstack: 

- Create Home content types with ‘Title’ and ‘Body’ fields
- Create an entry for Home content type
- Create a ‘development’ environment
- Publish Home entry to ‘development’


## Step 2:  Run gatsby & Play with Query tool

Navigate into your root directory and run the following command:

`gatsby develop`

After running this, you will be able to view your site at [http://localhost:8000/](http://localhost:8000/). You can run the GraphiQL IDE at [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql). The GraphiQL IDE will help you to explore the app&#39;s data, including Contentstack APIs.

Now, you will able to query Contentstack data. Try the query given below to get **Home** content type data:

```javascript
  {
    contentstackHome {
      title
      body 
    }
  } 
```

## Step 2:  Create page in Gatsby

Go to the **pages** folder inside the **src** folder, and create a **home.js** file. Add the code given below in it.

```javascript
import React from 'react'

export default ({ data }) => {
  return (
    <div>
      <h1>{data.contentstackHome.title}</h1>
    </div>
  )
}

export const pageQuery = graphql`
    query HomeQuery {
      contentstackHome {
        title
      }
    }
`
```

This will display the title of your home page on [http://localhost:8000/home](http://localhost:8000/home). Likewise, you can query more fields of your entry.



**More resources:**

- --[Contentstack documentation](https://www.contentstack.com/docs/)
- --[Contentstack + Gatsby app tutorial](https://www.contentstack.com/docs/example-apps/build-a-static-website-using-gatsby-and-contentstack)