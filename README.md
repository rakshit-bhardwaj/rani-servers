# Rani Server
Rani Server is a CS:GO server hosting website that allows users to rent or buy VIP access to 128 tick servers with custom plugins like !ws, !knife, !gloves, and !agents that enable them to use any skin in the game. The servers are hosted on a t2.micro EC2 instance running Ubuntu and created using LinuxGSM. The website is hosted on vercel.

deployed website - https://rani-servers.vercel.app/

## Features
128 tick CS:GO servers with custom plugins like !ws, !knife, !gloves, and !agents that enable users to use any skin in the game.

Secure payment processing with Stripe.

Secure and reliable database storage using Google Firestore to store Steam IDs.

Mobile responsive design for the web app.

## Installation

git clone https://github.com/rakshit-bhardwaj/rani-server.git
  
cd rani-server
  
npm install

> Create a .env file in the project root directory with the following environment variables:

NEXT_PUBLIC_LIVE_STRIPE_PB_KEY=live public stripe key

NEXT_PUBLIC_TEST_STRIPE_PB_KEY = test public stripe key

STRIPE_LIVE_SK_KEY=live secret stripe key

STRIPE_TEST_SK_KEY=test secret stripe key

FIREBASE_KEY = apikey

FIREBASE_appid = appid

npm run dev
> Open http://localhost:3000 in your web browser to view the website.

## Technologies Used
Next.js: Next.js is a React framework that provides server-side rendering and automatic code splitting, among other benefits. It allows for faster page loads and a better user experience.

Stripe: Stripe is a payment processing platform that is used to handle payments on the website. Stripe is secure and provides a smooth checkout experience for customers.

Google Firestore: Google Firestore is a NoSQL document database that is used to store Steam IDs for users. Firestore provides real-time updates and automatic scaling, which makes it ideal for this project.

Vercel: Vercel is a cloud platform that is used to host the website. Vercel provides fast deployments, automatic SSL, and serverless functions, among other features.

LinuxGSM: LinuxGSM is a command-line tool that is used to create and manage CS:GO servers on Linux servers. LinuxGSM simplifies server management by automating many of the tasks involved.

EC2: Amazon Elastic Compute Cloud (EC2) is a scalable cloud computing service that is used to host the CS:GO servers. EC2 provides resizable compute capacity, making it ideal for hosting game servers.

## software architecture 

![rani-servers-design](https://user-images.githubusercontent.com/100684015/229371710-d7fdfc31-0e0b-4704-a26f-a11b405755a8.png)

The CSGO servers can be accessed by the users via two methods, either by using the server's IP address or by utilizing the community server browser. The web application for Rani-servers has been developed using NextJS and is hosted on Vercel.

In the event that a user decides to purchase VIP membership, it is mandatory for them to provide their Steam ID, which can be obtained from Steamid.xyz. Subsequently, the user needs to click on the "Pay Now" option, which invokes the backend API endpoint, payment.js. This API endpoint handles the Stripe API and redirects the user to the Stripe checkout page. If the payment process is successful, the returned value of "success=true" along with the Steam ID is recorded.

The Steam ID is then added to the Firestore DB, and any new addition to the SteamID collection triggers a Firebase Cloud Function. This function, in turn, adds the new Steam ID to the local VIP list on the server using SFTP. Additionally, a cron job is set up to run at midnight every day, which automatically removes Steam IDs that are older than 30 days from both Firestore and the local VIP list.




