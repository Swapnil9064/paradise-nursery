# Paradise Nursery — Shopping Application

A responsive plant-shopping web application built with React, Redux Toolkit, and React Router. Browse houseplants by category, add items to your cart, adjust quantities, remove products, and see the live cart total.

## Features
- Welcome landing page with a nursery background image and a clear **Get Started** action.
- Plants grouped into categories with thumbnail, name, price, and care summary.
- Add-to-cart controls update the Redux cart and become disabled after a product is added.
- Cart item count and total update automatically.
- Increase/decrease quantity, remove items, and continue shopping.
- Checkout button displays a **Coming Soon** message.
- About Us page and responsive navigation.
- Responsive layout for desktop and mobile screens.

## Tech stack
- React + Vite
- Redux Toolkit and React Redux
- React Router
- CSS

## Run locally
1. Install Node.js (LTS).
2. Open a terminal in this folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown in the terminal.

To verify a production build:
```bash
npm run build
```

## Main source files
- `src/App.jsx` — landing page, navigation, routes, and company name.
- `src/App.css` — landing background image and application styling.
- `src/pages/AboutUs.jsx` — company details.
- `src/features/cart/CartSlice.jsx` — Redux cart state and actions.
- `src/components/ProductList.jsx` — product catalogue and add-to-cart actions.
- `src/components/CartItem.jsx` — cart display, quantity controls, removal, and checkout.
- `src/data/products.js` — product catalogue.
- `src/app/store.js` — Redux store configuration.

## GitHub submission URLs
After you upload this project to a **public** GitHub repository, use the corresponding file links below. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your own GitHub details.

- Q1 README: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/README.md`
- Q2 AboutUs.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/pages/AboutUs.jsx`
- Q3 App.css: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/App.css`
- Q4 App.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/App.jsx`
- Q5 CartSlice.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/features/cart/CartSlice.jsx`
- Q6 ProductList.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/components/ProductList.jsx`
- Q7 CartItem.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/components/CartItem.jsx`

**Important:** These are link templates, not live links yet. Upload the folder to your own public GitHub repository first, then replace the placeholders with your username and repository name.
