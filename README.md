Decision Maker Midterm Project
=========

## Introduction


## Screenshots


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information. You will also have to sign up for a Mailgun account to get the API key and domain for the email API. Put those in the .env file.
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Chalk
- Dotenv
- EJS
- Express
- Mailgun-js
- Morgan
- Sass

## Developers

- Ryan Schelhaas [@VagrantGinger68](https://github.com/VagrantGinger68)
- Waleed Ahmed [@ahmedwaleed03](https://github.com/ahmedwaleed03)
- Rita Tang [@ritatanght](https://github.com/ritatanght)
