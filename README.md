# Celerik / React Boilerplate

## Installation

##### Basics (ENV: Local)
Download and clone this repository using
This project was developed
```
git clone https://github.com/celerik/react-boilerplate
```
Install dependencies with:
```
npm install
```
Finally, run this project using:
```
npm start
```

##### Run different environments
React Boilerplate has support for many different environments right now and running this project with ```npm start``` will only deploy a development version in your browser.
You can set an environment variable for any of these before running ```npm start``` command
```
SET REACT_APP_ENVIRONMENT=local
SET REACT_APP_ENVIRONMENT=qa
SET REACT_APP_ENVIRONMENT=production
```
If needed, you can change some of the following configurations in any ```env-{NAME}.json``` file located at ```/config/settings```

- Any of the microservices root URL
- Service Mocker configuration
- Redux middleware configuration
- Mocked third party APIs authorizations *(Please, don't leave any of these keys in your production deployment)*

##### Build
For building this code you can simply run
```
npm run build
```

This will generate your production files in ```./build``` folder. Then, you can use any HTTP server to see it or deploy it.

We suggest using npm ```http-server``` for checking the status of the build before deployment.

```
npx http-server ./build
```

##### Docker
After the creationg of your ```build``` folder with ```npm start```, you can create and run Docker images with:
```
# Create new Docker Image
docker build -t $IMAGE_NAME .
docker run -it -rm -p $PORT_BIND:$PORT_LISTEN --name $NAME $IMAGE_NAME
```
For example:
```
docker build -t boilerplate .
docker run -it -p 3000:0 --name react-app boilerplate
```

##### Avaliable Scripts

React Boilerplate has many other scripts that are pretty helpful for any Dev Team.

- ```lintj``` - You can use this for checking if any change in the code is syntactically correct according to the project's structure.

- ```test``` - this script is related to QA suite, it'll help you to run Unit Tests implemented for this project and collecting the coverage of the tested code.

- ```storybooks``` - This script will run a new server in ```localhost:6006``` with documentation related to components implemented in this project (Atoms, Organisms and Templates).
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
