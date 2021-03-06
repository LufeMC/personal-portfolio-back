
<h1 align="center">Stripe Integration 👋</h1>
  
![badge](https://img.shields.io/badge/license-MIT-brightgreen)<br />

## Description
🔍 This project was made for David from Fiverr. It spurpose is to create a report with information from his clients' orders.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Final Considerations](#final-considerations)

## Installation
1. Install Node.js on your machine (follow the instructions on: https://nodejs.org/en/download/)
2. Create a Github account if you don't have any yet
3. Install git (Follow the instructions on https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Go to the root folder of the place you want the project
5. Open a terminal on that folder, run ```git clone https://github.com/LufeMC/export_orders_to_csv.git``` and follow the instructions
6. (Open the terminal the folder that is going to be created (export_orders_to_csv) and run ```npm install```
7. Still in the terminal, run ```npm run dev```

## Usage
- The code starts at the app.ts file, inside the src folder. That's where the routes are created and the server is started.
- From there, if you open the routes folder, you will find a index.ts file, which contains the call of stripe.ts, a file with the actual methods of the backend
- From there, if you open the controllers folder, inside the src folder, you will find the ShopwareController.ts file. That's the file which the actual hard coding occurs
- The Shopware.ts file, inside the integrations folder (which is inside the src folder), contains the requests calls to the Shopware API
- Last but not least, the config.ts file together with the .env file, in the root of the project, contains a secure way of declaring variables in Node.js codes

## Questions
✋ Contact luisfernandomonteirocerqueira@gmail.com<br />
<br />
:octocat: Find me on GitHub: [LufeMC](https://github.com/LufeMC)<br />
<br />
✉️ Email me with any questions: luisfernandomonteirocerqueira@gmail.com<br /><br />

## Final Considerations
I hope you had a good time and my work satisfies you. 😊#   p o r t f o l i o - b a c k e n d  
 