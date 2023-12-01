# archipylago

a Python community in Turku

This repository is the website currently live at [https://archipylago.dev](https://archipylago.dev).

## Development

This project is built with [Eleventy](https://11ty.dev).

### Requirements & Installation

This project requires [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [npx](https://www.npmjs.com/package/npx).

To install dependencies, run

```
npm install
```

### Development environment

To get a local environment running, run

```
npm start
```

## Deployment

This repository current automatically deploys to Netlify project owned by [Juhis](https://github.com/hamatti).

Any pull request created will be auto-deployed to a draft and will receive a link to that as a GitHub PR comment.

## Notes about site and its features

### Events

We have two event listings: current active calendar and history.

To add an event to a calendar that's visible on the front page (usually for Spring/Fall season at once), add an event to `_data/events.json`:

```json
[
  {
    "host": "[Company or venue]",
    "date": "[YYYY-MM-DD]",
    "url": "[URL to registration/event page, if exists]"
  }
]
```

If this array is empty, the section is hidden from the website.

For the history timeline, once event is done, add it to `_data/history.json`:

```json
[
  {
    "date": "[YYYY-MM-DD]",
    "host": "[Company or venue]",
    "talks": [
      {
        "title": "[Talk title]",
        "speaker": "[Speaker name]",
        "description": "[Talk description]",
        "url": "[URL to video/slides/etc if exists]"
      }
    ]
  }
]
```

These will be populated in `/history` page.

### Sponsors

To add a sponsor, add a new entry to `_data/sponsors.njk`:

```json
[
  {
    "name": "[Company]",
    "url": "[URL]"
  }
]
```

and add a logo with size of 150x94px to `assets/img/sponsors/[company].png`.

### Team members

To add, modify or remove a member from the Team section, modify `_data/team.json`:

```json
{
  "name": "[Name]",
  "title": "[Title]",
  "links": [
    {
      "icon": "[service-name]",
      "url": "[url]"
    }
  ]
}
```

To add images, add a member's portrait in `assets/img/team/[firstname]-[lastname].png` and it will be autodiscovered.

To add icons for links, add them to `assets/img/icons/[service-name].svg`.

### Blog posts

To write a blog post, create a new markdown file to /blog folder with frontmatter of:

```yaml
---
layout: layouts/blog.njk
tags: post
title: "[Blog title]"
date: [YYYY-MM-DD]
author: "[Author name]"
---
```

Then write your blog post. It will appear in /blog index and get a URL of /blog/[slug] where [slug] is automatically slugified version of the title of the post.

Blog posts also support syntax highlighted code blocks. To create one, add a code block with triple backticks and language name (currently only supports Python).