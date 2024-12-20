## Table of Contents
1. [Petalia](#petalia)
2. [UX Design Process](#ux-design-process)
   - [Wireframes and Mock-ups](#wireframes-and-mock-ups)
   - [Features](#features)
3. [Database Structure and Data Model](#database-structure-and-data-model)
4. [Technologies Used](#technologies-used)
5. [Installation](#installation)
6. [Deployment](#deployment)
7. [Customer User Stories](#customer-user-stories)
8. [Bugs](#bugs)
9. [Challenges Encountered](#challenges-encountered)
10. [Automated Tests](#automated-tests)
    - [Checkout Page Tests](#checkout-page-tests)
    - [Stripe Integration Tests](#stripe-integration-tests)
    - [Stripe Elements Tests](#stripe-elements-tests)
11. [Manual Tests](#manual-tests)
12. [Future Features](#future-features)
13. [Credits](#credits)

# Petalia - from the heart of nature

Petalia is a modern flower shop platform built using Django and integrated with Stripe for secure payments. 

Live site: https://petalia-flowershop-05fb6f37adca.herokuapp.com/

![Responsiveness](media/responsive.jpg)

The app was created to provide a seamless, user-friendly platform for customers to explore and purchase floral arrangements online. With the increasing trend of e-commerce and the growing demand for personalized shopping experiences, the app aims to make flower shopping convenient, accessible, and enjoyable for all users.

Key motivations for developing Petalia Flower Shop include:

**Accessibility**: Traditional flower shops often have limited operating hours and inventory visibility. This app allows users to shop for flowers anytime and view available arrangements in real time.

**Convenience**: Busy lifestyles can make it difficult for customers to visit physical stores. The app offers a streamlined browsing and purchasing process, ensuring users can select and order flowers in just a few clicks.

**Customization**: Flowers are often purchased for special occasions or as gifts, requiring unique arrangements. Petalia includes features that allow users to personalize their orders, enhancing the customer experience.

**Aesthetic Appeal**: As a flower shop, showcasing the beauty of the products is crucial. The app was designed with a clean and visually appealing interface to highlight the vibrancy and elegance of the floral arrangements.

**Scalability**: Petalia serves as a scalable solution for small and medium-sized florists looking to expand their reach online without requiring a significant investment in standalone e-commerce infrastructure.

**Sustainability and Growth**: By digitizing the flower shopping process, Petalia not only simplifies operations but also provides valuable insights into customer preferences, enabling businesses to adapt and grow.

<img src="media/index.png" alt="Home Page" style="width: 200px;" /> <img src="media/products.png" alt="Products" style="width: 200px;" />

<img src="media/checkout.png" alt="Shopping Bag" style="width: 190px;" /><img src="media/confirmation.png" alt="Confirmation Message" style="width: 190px;" />

## UX Design Process

The design of the website was crafted to deliver a seamless, visually appealing, and user-friendly experience tailored for an e-commerce flowershop. Inspiration was drawn from platforms like Pinterest and Dribbble, where I explored modern floral design layouts, color palettes, and UI components that resonate with elegance and simplicity.

To ensure the website met user expectations, I considered:

- **Target Audience**: Individuals looking for flower arrangements for special occasions, gifts, or wedding bouquets.
- **User Needs**: Simple navigation, easy product discovery, and smooth checkout process.
- **Accessibility** By incorporating ARIA roles and labels, the application supports better usability and aligns with WCAG guidelines, enhancing the experience for users with disabilities.
- **Pain Points**: Poor mobile responsiveness, cluttered designs, and complex user flows seen in similar sites. I decided to go with something more simple, but at the same time keep the floral design.

### Wireframes and Mock-ups 

For this project, I utilized tools like Figma, Canva, Balsamiq, and Paint to create wireframes and conceptualize the design. I also experimented with various mobile apps to sketch a logo on my phone, but ultimately chose to keep the design simple and straightforward. 

Initial logo wireframe :
<img src="media/wireframe_logo.png" alt="Initial logo" style="width: 100px;" />


The wireframes focused on key pages, including:

- **Homepage**: Highlighting the hero section, call-to-action elements, and featured products.
- **Product Listing Page**: Featuring clear card layouts and sorting options for easy navigation.
- **Checkout and Sign-Up Forms**: Minimalistic and modern forms to ensure a seamless user experience.

These wireframes served as essential blueprints, ensuring clarity and consistency throughout the development process.

As the project progressed, I decided to redesign the hero image and form background using Canva, adding a fresh and cohesive aesthetic to the overall site, as I felt that it needed a modern touch.

Initial banner wireframe vs final choice: 

<img src="media/wireframe_banner.jpg" alt="Banner initial wireframe" style="width: 200px;" /> <img src="media/wireframe2.png" alt="Wireframe 2" style="width: 200px;" />


<img src="media/wireframe1.png" alt="Wireframe 1" style="width: 100px;" /> <img src="media/wireframe4.png" alt="Wireframe 4" style="width: 200px;" />

An e-commerce Bootstrap theme served as inspiration and a design guide for the layout and structure of my products page, specifically drawing from [this template](https://startbootstrap.com/template/shop-homepage).  

<img src="media/wireframe3.png" alt="Wireframe 3" style="width: 200px;" />

Color Palette: Soft pastel tones, including lavender and pale pink, were chosen to inspire a flower-inspired theme.

Imagery: High-quality images of bouquets and floral arrangements were prioritized to enhance the aesthetic appeal and highlight the product offerings. In some cases, AI-generated bouquets were utilized due to challenges in sourcing suitable free images.

### Features

- **User Authentication**: Handles user registration and login.
- **Product Catalog**: Browse a selection of floral bouquets.
- **Product Search and Filtering**: Easily find products (based on desired flower type for example)
- **Product Details**: View high-quality images and a short description.
- **Shopping Cart**: Add products to the cart, adjust quantities.
- **Checkout Process**: Seamless checkout with order summary and payment integration.
- **Order History**: Registered users can view their past orders.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Newsletter Subscription**: Stay updated with the latest promotions.

### Database Structure and Data Model

The app employs a structured database schema to manage its core functionalities, ensuring efficient data storage and retrieval. Below is an overview of the primary models and their relationships:

1. User Model:

Utilizes Django's built-in User model to handle user authentication and profile management.

2. Product Model:

Represents the floral arrangements available for purchase. Key attributes include:

- Name: The title of the product.
- Description: Detailed information about the product.
- Price: Monetary value of the product.
- Image: Visual representation of the product.
- Category: Classification to which the product belongs.
- Stock Quantity: Number of items available in inventory.

3. Category Model:

Categorizes products to facilitate user navigation. Attributes include:

- Name: The category's title.
- Description: Details about the category.

4. Order Model:

Tracks customer purchases. Key attributes:

- User: Associated with the User model, indicating the purchaser.
- Order Date: Timestamp of when the order was placed.
- Total Amount: Aggregate cost of the order.
- Status: Current state of the order (e.g., pending, completed, shipped)

5. OrderItem Model:

Details individual products within an order. Attributes include:

- Order: Linked to the Order model.
- Product: Associated with the Product model.
- Quantity: Number of units of the product ordered.
- Price: Price of the product at the time of order.

6. Cart Model:

Manages items that users intend to purchase. Key attributes:

- User: Linked to the User model.
- Created Date: Timestamp of cart creation.
- Updated Date: Timestamp of the last update to the cart.

7. CartItem Model:

Represents individual products in a user's cart. Attributes include:

- Cart: Associated with the Cart model.
- Product: Linked to the Product model.
- Quantity: Number of units of the product in the cart.

8. ShippingAddress Model:

Stores delivery details for orders. Key attributes:

- User: Linked to the User model.
- Order: Associated with the Order model.
- Address Line 1: Primary address information.
- Address Line 2: Secondary address information (optional).
- City: City of residence.
- Postal Code: ZIP or postal code.
- Country: Country of residence.

One-to-Many relationship:

A User can have multiple Orders.
A Category can encompass multiple Products.
An Order can contain multiple OrderItems.
A Cart can include multiple CartItems.

Many-to-One relationship:
Multiple OrderItems can reference the same Product.
Multiple CartItems can reference the same Product.


For reference, see diagram below: 

<img src="media/db_diagram.png" alt="Database diagram" width="400" />

### Technologies Used
- HTML5
- CSS3
- Python
- Javascript 
- Django
- AWS for statics
- Bootstrap
- SQLite
- Stripe
- Canva, Figma, Balsamiq and Paint for wireframes
- Microsoft Designer for image editing
- Git and Github for version control
- Heroku for deploying
- Chrome developer tools
- Pexels, Unsplash and DeepAI for images


### Installation

To install and run the app locally:

Clone the repository git clone https:// https://github.com/adinabo/petalia-flowershop
Navigate to the project folder: cd petalia_flowershop
Install the required dependencies: pip install -r requirements.txt
Run the app: run.py
Open the app


### Deployment

1. Create a Heroku Account: Set up an account on Heroku.
2. Prepare the Application: Ensure that the application is ready for deployment by setting up a requirements.txt file with all the necessary dependencies and a Procfile to specify the command used to run the app.
3. Initialize a Git Repository: If not already done, initialize a Git repository and commit all changes.
4. Create a New Heroku App: Use the Heroku dashboard or CLI to create a new app.
5. Connect the App to Heroku: Connect the Heroku app to the GitHub repository or push directly from the command line.
6. Configure Environment Variables: Set up the necessary environment variables in the Heroku dashboard.
7. Deploy the Application: Deploy the app either via GitHub integration or manually by pushing to Heroku using the git push heroku main command.
8. Monitor and Debug: Use the Heroku logs to monitor the app’s performance and debug any issues that may arise.

## Customer User Stories

1. As a customer, I want to browse the available flower arrangements, so that I can select a bouquet that suits my needs.
2. As a customer,I want to search for flowers by category, color, or occasion, so that I can quickly find the most suitable options.
3. As a customer, I want to see detailed information about each flower arrangement (e.g., size, type, and price), so that I can make an informed purchase.
4. As a customer, I want to customize my bouquet with specific flowers or a personal message, so that I can make the gift more meaningful.
5. As a customer, I want to add items to my shopping cart and review my selections, so that I can easily manage my order before checkout.
6. As a customer, I want to securely enter my payment and delivery details,
So that I can complete my purchase without any concerns.
7. As a customer, I want to track my order history, so that I know which orders I've placed.
8. As a visitor, I want to explore the website without creating an account, so that I can decide if I want to make a purchase.
9. As a user, I want to create an account and log in securely, so that I can save my personal details and order history.
10. As a user, I want the app to be mobile-friendly and responsive, so that I can easily shop on my phone or tablet.
11. I want the website to load quickly and run smoothly, so that I have a pleasant browsing experience.


### Bugs 

- The initial loading time seems slightly longer than expected, particularly for the home page. This could be due to the number of large images and resources being loaded, even though images have been resized.

- Inconsistent Hero Button Placement: The "Shop Now" button in the hero section displays inconsistent positioning on smaller screens. While this does not significantly impact functionality, it affects visual consistency. Addressing this alignment issue is planned for future updates.

- Register and Login Page Styling: The styling on the register and login pages could be enhanced for a more polished and cohesive design.

- The "Add to Bag" toast notification would benefit from an exit button or a reduced display time to improve user experience. Adjustments to this feature are planned for future iterations.

- A scrollable section appears on the shopping bag page, negatively impacting the user experience. This issue will be addressed in future updates to ensure seamless navigation and usability.

## Challenges encountered

A significant challenge in my project was configuring the AWS bucket for static files. The main issue involved product images; when uploading through the admin panel, the file names would automatically change, causing a mismatch between the admin panel and the bucket. It also took quite some time for my statics to show in the bucket, which made me think initially that there might be an issue with my bucket configuration.

Another issue was with the credit card field on the checkout page. An iframe blocked the form submission, initially leading me to suspect a problem with Stripe. After running tests on Stripe’s functionality, I identified the issue as the iframe overlay obstructing the submission button.

Additionally, I encountered difficulties with the order of configurations in settings.py. It took time to realize that the sequence of settings impacted the app’s behavior rather than an issue with the code itself.

## Automated Tests

This project includes automated tests to ensure the correct functionality of the **checkout page** and **Stripe integration**. The tests cover both frontend and backend components, including the Stripe payment processing logic.

The test suite uses Django's built-in testing framework (`django.test`) and covers the following areas:

- **Checkout Page**: Verifies that the checkout page renders correctly.
- **Stripe Integration**: Ensures the correct Stripe keys are being used, and that API calls to Stripe are functional.

### Checkout Page Tests

The `CheckoutViewsTestCase` class tests the **checkout page** rendering.

#### Test: `test_checkout_page_loads`
Verifies that the checkout page:
- Returns a status code of `200` (OK).
- Uses the correct template (`checkout/checkout.html`).

### Stripe Integration Tests

The `StripeIntegrationTest` class ensures that the integration with Stripe works as expected, including validating the **public** and **secret keys**.

#### Test: `test_stripe_secret_key_valid`
Validates the **secret key** by making a `PaymentIntent` API call to Stripe. It checks:
- The request successfully creates a `PaymentIntent` with the correct amount and currency.
- If authentication fails, the test raises an `AuthenticationError`.

#### Test: `test_stripe_public_key_valid`
Checks if the **public key** is valid by simulating the creation of a `PaymentIntent` on the frontend. It verifies that the public key starts with `pk_test_` or `pk_live_` as expected for Stripe keys.

#### Test: `test_stripe_keys_integrated`
Combines `test_stripe_secret_key_valid` and `test_stripe_public_key_valid` to ensure both keys are properly integrated.

#### Test: `test_invalid_public_key`
Verifies that an invalid **public key** results in a `StripeError` when attempting to create a `PaymentIntent`.

### Validators

- WS3 HTML Testing Validator https://validator.w3.org/
Since the project was built using Django, the validator returned several errors and warnings that are specific to the templating system and Django’s dynamic content rendering. These errors do not indicate actual issues with the HTML but rather limitations of the validator when working with frameworks like Django.

- CSS After testing the CSS code with Jigsaw Validator, there were no errors found.
- 

### Stripe Elements Tests

The Stripe Elements tests ensure the correct behavior of the **Stripe Elements** integration:

- **Stripe Initialization**: Ensures that the Stripe object is correctly initialized with the public key from the backend (Django).
- **Element Creation**: Validates that the `card` element is created using the mocked `elements.create` method.
- **Element Mounting**: Confirms that the `mount` function is called with the correct DOM element (`#card-element`), simulating the mounting of the payment form.

### Mocking Stripe API

Since Jest runs in a Node.js environment and cannot interact with the actual Stripe API or load static files like `stripe_elements.js`, the **Stripe API** is **mocked** using Jest's mock functions. This allows us to simulate Stripe Elements' behavior and test the integration logic without making real API calls or loading external resources.

## Manual Tests

1. 6. UI/UX Testing
Verified all links and navigation paths to ensure they redirect to the correct pages without broken links or errors.
Tested navigation menus, footer links, and any embedded hyperlinks to confirm consistency.
Gathered feedback from friends on the ease of navigation, the intuitiveness of the UI, and the clarity of messages.
Ensured error messages were helpful and guided users to correct mistakes.

2. Checking responsiveness in  Developer Tools

Used Developer Tools in Chrome to simulate various screen sizes.
Ensured the site layout adapts correctly for desktop, tablet, and mobile screen resolutions.
Confirmed buttons, text, images, and other UI elements adjust and remain legible on smaller screens.

3. Adding products to the card

Added individual and multiple products to the shopping cart.
Verified quantities and prices update accurately.
Checked the cart functionality persists between sessions using cookies or server-side storage.
Validated product removal works as expected.

4. Placing an order
One issue encountered when placing an order was that it didn't return checkout_success everytime an order was placed. When opening with Dev Tools, it did work on mobile but not on desktop. Also, the grand total was not being returned on the checkout success page. 

5. Viewing the app on different mobile devices 
Tested the site on a range of physical devices (IPhone 14, Android phones such as Samsung S24, S20, iPad).


### Future Features 

1. User Wishlist - where the user can save their favourite products.
2. Seasonal Promotions with countdown timers for ongoing deals.
3. AI-Powered Chatbot that provides instant assistance to customers based on a limited number of questions they might ask.

### Credits

- Jessica Bassey from Newcastle College for support 
- Friends and family for feedback

Mentor was not used at all for for this project so no guidance was received.


All images have been taken from: 
- Usplash and Pexels
- Generated with AI https://deepai.org/
- Favicon was taken from: https://icons8.com/icons/set/
