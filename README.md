SHOP NOW 🔥

**See the application in action and test it yourself !! Deployment Link-  https://shop-now-megu-community.netlify.app/**

This is a E-commerce website build on React.js at the frontend and all the backend is handled by Commerce.js(A powerful eCommerce SDK for building custom cart and checkout experiences. Commerce.js is trusted by developers around the world to deliver API driven eCommerce into web, mobile, augmented, and virtual shopping experiences).
It uses react-hook-form package to create custom forms and material-ui for the styling, react-credit-card-input package to create the credit card input fields.I have integrated the testing payment gateway provided by commerce.js in the application. 

**The testing card details provided by commerce.js is
4242 4242 4242 4242   04 / 24  242
Putting in any other card number will lead u to the error page ❌ displaying a error message along with a button leading u back to the store.**

App Flow-

1. The user lands on the landing Page

![Landing Page](https://user-images.githubusercontent.com/66476812/136556820-d298021d-1007-4d58-be4b-47833d25bf51.png)

**Here the user can add the products to his cart **

2  Now Depending on whether his cart is empty or filled he may see the empty cart component or filled cart component.

**Empty Cart**

![Empty Cart](https://user-images.githubusercontent.com/66476812/136557274-83e00c0a-1ecb-437d-be91-a516498e57e9.png)

**The user can click on start adding some link and go to the landing page or he/she may click on the logo of the app to go to the landing page at any step of the application flow**

**Filled Cart**

![Filled Cart](https://user-images.githubusercontent.com/66476812/136557341-88a3ad1f-b40d-46d1-8b86-a6df0fed3864.png)

**Here the user can increment or decrement the quantity of any product , can remove a particular product from his cart , can empty the complete cart , can go back to the landing/Products Page of the app or can proceed further by clicking on the checkout button**

3. By Clicking on the checkout the user will be directed to the checkout route where the shipping address form will be rendered.

![Shipping address form](https://user-images.githubusercontent.com/66476812/136558243-79e6684e-6b93-4ace-81bf-79744134ad40.png)

**Here the user needs to fill his details and click on Next in order to go to the payment step and back to go back to his cart**

4. By clicking on the Pay button the payment detail form will be rendered showing a order summary of the customer's order along with a credit card input field.

![Payment Details Form](https://user-images.githubusercontent.com/66476812/136558771-aadf5ac3-5d1a-4836-aee2-2bc40e6edb06.png)

**Here the user needs to input his credit card details**

5. By clicking on the Pay button the user might see the confirmatory page or the error page depending on whether the transaction was successfull 

**Confirmatory Page💥 **

![Confirmatory Page](https://user-images.githubusercontent.com/66476812/136559074-4ec924db-79c8-42cb-9f00-ac6a5056e1ea.png)

**Error Page ❌**

![Error Page](https://user-images.githubusercontent.com/66476812/136559240-8f881175-3c2d-4d47-a487-b34947580a93.png)

**The complete design is fully mobile responsive. You can find the screenshots of the mobile view in the repo as Design images->Mobile View**

I haven't implemented the login and logout functionality yet but i m gonna get that thing here in the future commits 😅

**If you find it worth it , feel free to give this repo a star⭐⭐**

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
