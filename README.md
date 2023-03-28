# Rani Server
Rani Server is a CS:GO server hosting website that allows users to rent or buy VIP access to 128 tick servers with custom plugins like !ws, !knife, !gloves, and !agents that enable them to use any skin in the game. The servers are hosted on a t2.micro EC2 instance running Ubuntu and created using LinuxGSM. The website is hosted on vertcel.

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


## Advantages of Using These Technologies
Next.js provides server-side rendering and automatic code splitting, which improves page load times and provides a better user experience. Additionally, it allows for easy integration with other React components and libraries.

Stripe is a secure and reliable payment processing platform that provides a smooth checkout experience for customers. It also offers features like fraud prevention and dispute resolution.

Google Firestore provides real-time updates and automatic scaling, which makes it ideal for this project. Additionally, it offers seamless integration with other Google Cloud Platform services.

Vercel provides fast deployments, automatic SSL, and serverless functions, which simplifies hosting and deployment of the website. Additionally, it offers easy integration with other Vercel services like logging and monitoring.

LinuxGSM simplifies server management by automating many of the tasks involved in creating and managing CS:GO servers. This saves time and reduces the likelihood of errors.

EC2 provides resizable compute capacity, which makes it ideal for hosting game servers. Additionally, it offers a wide range of instance types to choose from, allowing for easy scalability.
