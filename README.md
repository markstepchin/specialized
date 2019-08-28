The app is hosted live [here](https://kind-pare-e13ec8.netlify.com/)

This app recreates the Specialized webapp with a narrower focus on their mountain bikes. I used parts of the existing site as mockups, and strayed from it where I saw fit. In this project, I focused on creating a modern front end with a clean design. I also got the chance to use re-usable components and the latest React features (context and hooks).

The app is built on React. The pages listing the bikes, as well as the bike detail pages are identical, except for the data for that particular product. The bike data is stored in data files, imported, and mapped to re-usable components.

The code that I'm most proud of the is the CartContext, which manages the cart data and provides it to the components that need it throughout the app.