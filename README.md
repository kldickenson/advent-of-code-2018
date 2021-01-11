## Very beginning (only once)

<!-- 1. Install http-server: `npm install http-server -g`
[Information on setting up local http-server](https://javascriptinfo.com/view/189740/how-to-run-html-file-on-localhost)-->

1. In project root, npm init: `npm init`
<!-- 3. In project root, install cypress: `npm install cypress --save-dev` -->
2. In project root, install jest: `npm i --save-dev jest`
3. Create scripts in the package.json

```js
"scripts": {
        // "server": "http-server ./",
        // "cypress": "npx cypress open",
        "test": "jest"
    },
```

<!-- 5. Place your Cypress test files in `./cypress/integration` -->

4. Your Jest test files go in project root and are named `xxx.test.js`
5. Follow this article for ESlint & Prettier to work nicely together: [https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi](https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi)

## Getting up and running from project root

<!-- 1. Start the http server: `npm run server` -->

1. To run all jest test: `npx jest`
2. To run a specific jest test run: `npm run test file-name.test.js`
   <!-- 3. Start the Cypress server: `npm cypress` -->
   <!-- 4. Use the cypress server to run the test file you want -->

## To shut down

<!-- 1. `crlt-C` the cypress server -->

<!-- 2. `crtl-C` the http server -->
