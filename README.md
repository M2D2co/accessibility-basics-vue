# Accessibility Basics - Vue

## Description

If you ever use the elevator, subtitles to watch that cat video during a boring meeting, or tabbed through a form, you have used an accessibility feature. As a community we understand that accessibility is necessary but when it comes to implementation, we often fall short.

This app is the base for a hands on workshop for those interested in learning how to get started.

## Demo

<https://m2d2co.github.io/accessibility-basics-vue/>

## Getting Started

### Branches

* `latest` has the accessible version of the application.
* `start` has the starting point for the workshop. This branch includes errors that will be tested for, explained, and fixed during the workshop.

## Running the code

1. `$ npm install`: project setup
2. `$ npm start`: compile and hot reload for dev (serves the application on `localhost:8080`)

### Other scripts

* `$ npm run build`: compile and minify for production
  * production deploy is configured to deploy to github pages for this repository
* `$ npm run lint`: lints files
* `$ ./deploy.sh`: builds and commits to gh-pages which deploys to github
  * deploys to: <https://m2d2co.github.io/accessibility-basics-vue/>
  * if you get a `no such file or directory` error, you may have to make it an executable: `$ chmod +x deploy.sh`

_Note:_ A modern browser is necessary to run this project

## Technologies Used

* [CSS3](https://www.w3.org/Style/CSS/Overview.en.html) / [SCSS](https://sass-lang.com/)
* [HTML5](https://www.w3.org/TR/html52/)
* [IndexedDb](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* [Vue](https://vuejs.org/)
