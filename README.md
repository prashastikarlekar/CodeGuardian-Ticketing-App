<!-- @format -->

- Ticketing app

* Started with npx create-next-app@latest, gave app name - cannot be capital letters.

* Ran the development server - npm run dev

* Removed default styling from global.css except the first 3 lines
* Changed page.jsx to default landing page. Deleted the top line of import React
* Created a new folder for routing - TicketPage and added page.jsx file in it. App router will automatically set up routing for us based on the folder structure.
* Again created a new folder group in TicketPage folder - [id] and moved page.tsx into this.
* Edited page.tsx to fetch the params from url and displayed it in page
* Created another folder in app - (components). We do not want this in our route so we created it with ()
* Added Nav.jsx in to this. No one will be able to navigate to this component with .../Nav url but we will need this component in our project.
* Change metadata in layouts.js for our project. children in layouts file are the components on our page so if we want Nav in every page we can add it above {children}
* Installed few packages - npm install @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
* With Tailwind CSS wecan set our default colors in tailwind.config.js. This allows us to use standarized color names that we can create and then if we want to change things later in our app, we can change it in one spot and it will push it throughout the project wherever we use that previous color.
* Added colors property beneath backgroundImage in tailwind config.
* Added import { config } from "@fortawesome/fontawesome-svg-core"; import "@fortawesome/fontawesome-svg-core/styles.css"; config.autoAddCss = false; in layout.js, last line will not let the icons be very big as in when we load an svg image on screen it is big and this will not let it jump on the screen when it is loaded.

* For database, we are using MongoDb Atlas, it is a free setup
* We will also use Mongoose. in MongoDb we do not define types like in a traditional relational database. But Mongoose allows us to have data integrity and also makes connecting to the database easier.

* Database setup in models/Ticket.js
