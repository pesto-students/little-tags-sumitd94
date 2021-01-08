# Little Tags - An Online Clothing Store

Pesto Tech is proudly launching its own Online Clothing Store named **Little Tags**. You have been awarded with the project and you need to design and develop this project which should meet the requirements mentioned in the MVP below.

# MVP Requirement

1. Show Login/Signup popup to user when he/she lands on the site for first time.
2. User should be able to Login / Signup from the header button.
3. User should be able to Login/Signup through Google/Facebook or with their mobile numbers
4. User should be able to search items on the site using Search bar.
5. User should be able to browse items by categories mentioned on Home Page.
6. User should be able to see detailed description of an item by clicking on it. (refer design)
7. User should be able to select Size, Quantity and other parameter(if any) before adding item to the cart.
   User should be able to add and remove items in the cart.
8. Only logged in user should be able to add items to the cart.
9. Only logged in user should be able to place order.
10. User should be able to access item categories from Hamburger menu (refer design).

11. Website should be mobile responsive. user should be able to browse/purchase items on their mobile browser.
12. User should be able to see their order history.
13. User should be able to set their default shipping address.

**Note: Please deploy your application to Netlify(no other platforms allowed at this point) and Add your Application link to website section in About field**

# Bonus Requirement

1. Integrate Razorpay/Stripe Payment (sandbox environment)
2. User should be able to set default payment method
3. User should be able to add items to wishlist
4. Write Test cases for your components

## UI Design mocks

UI design mocks are available in `design-mocks` folder

|                                    |                                        |
| :--------------------------------: | :------------------------------------: |
|     ![](design-mocks/home.png)     |  ![](design-mocks/home_logged_in.png)  |
| ![](design-mocks/product_list.png) |     ![](design-mocks/product.png)      |
|     ![](design-mocks/cart.png)     |     ![](design-mocks/checkout.png)     |
|    ![](design-mocks/orders.png)    | ![](design-mocks/successful_order.png) |

[Adobe XD design link](https://drive.google.com/file/d/1_e7X57CoN7YhDlapVlLkL14ksVTzAwQh/view?usp=sharing)

[Zeplin web link](https://zpl.io/29L0mEW)

# API

Use `https://fakestoreapi.com/products` to fetch products.

## Allowed Tech stack(Language/Library)

- HTML, CSS, JavaScript
- Bootstrap
- ReactJS
- SCSS
- DOM Testing Library
- Jest and React Testing Library
- React Router

**NOTE: React Component libraries like Material UI, Antd, Chakra UI are not allowed**

## Folder Structure

- Non-feature code that can be shared across different parts of the app (\_actions, \_constants, \_helpers, \_reducers, \_services)
- Prefixed non-feature folders with an underscore "\_" to group them together and make it easy to distinguish between features and non-features,
- The index.js files in each folder are barrel files that group all the exported modules together so they can be imported using the folder path instead of the full module path and to enable importing multiple modules in a single import (e.g. import { userActions, alertActions } from '../\_actions')
- The \_actions folder contains all the Redux action creators for the project
- The \_constants folder contains all of the redux action type constants used by redux action creators and reducers
- The helpers folder contains all the bits and pieces that don't fit into other folders but don't justify having a folder of their own.

## Features RoadMap

- Integrate Payment methods
- Improve Past Orders screen
- make moibile responsive
- Connect the store with backend
- Product reviews section
