Decision Maker Midterm Project
=========

## Introduction
We've built an application that allows a user to create a poll and send it to their friends to help make decisions. This project allowed us to practice our Front-end and Back-end Programming skills. Some of the technologies we used include Express, Node, Postgresql database, SASS, and a Mailgun API. We also got experience working as a development team through our git workflow. The results of each poll are sorted using the Borda Count method. 


## Screenshots

Home page with form toggle
!["Home page"](https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/docs/Home-page.png?raw=true)

</br>

Create a poll
!["Create a poll"](https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/docs/Create-a-page.png?raw=true)

</br>

Link page for poll creator
!["Link page"](https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/docs/Link-page.png?raw=true)

</br>

Answering a poll
!["Answering a poll"](https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/docs/Answer-the-poll.png?raw=true)

</br>

Result page
!["Result page"](https://github.com/VagrantGinger68/Lighthouse-Midterm/blob/ryan/docs/Results-page.png?raw=true)

</br>

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information. You will also have to sign up for a Mailgun account to get the API key and domain for the email API. Put those in the .env file.
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
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
