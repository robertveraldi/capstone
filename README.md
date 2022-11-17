# Gym Routine (React.js)

<p align="center">
<a href="#introduction">Introduction</a> &nbsp;&bull;&nbsp;
<a href = "#installation">Installation</a> &nbsp;&bull;&nbsp;
<a href = "#usage">Usage</a> &nbsp;&bull;&nbsp;
<a href = "#roadmap">Roadmap</a>
</p>

## Introduction

This react project serves as the front end for my app. It communicates with my [RoR back end](https://github.com/robertveraldi/capstone-rails-backend)), and is designed for a simple, user-friendly experience. This app allows the end user to browse and learn about different exercises. After creating an account, the user can then build a routine including whichever exercises they'd like. It's a great tool to take the uncertainity out of going to the gym, particularly for those who are just starting their fitness journey. I struggled with starting to work out because I was never sure of a plan for once I was actually in the gym. I've built this with my experience in mind.

<!-- Describe the technologies you used to build your app (Ruby on Rails backend, React.js frontend, any libraries, APIs, etc.) -->

This is built using React.js version 8.19.2. It utilizes useState and useEffect, Axios for web requests, Bootstrap with an imported 'Bootswatch' theme (Litera), a DropdownList techonolgy from the React Widgets Library, and React-Router. I also added custom CSS for things such as modals and card-text.

<!-- Optional: Add screenshots or gifs of your application -->

### Installation

Clone this repo down to your computer. It will create a directory on its own, but if you'd prefer it to be within a certain directory, make sure to navigate there first. Then run -

```bash
npm install
```

This command will download and install a package and it's dependencies from the `package.json` file. It generates a `node_modules` folder with the installed modules.

### Usage

```bash
npm run dev
```

This command initializes the React server. Unless you are running another server on port :5173, this server will run on http://localhost:5173. To be sure, reference the response after starting the server - 'Local: ...'.

To use this, you'll need to have the [backend code](https://github.com/robertveraldi/capstone-rails-backend) running on http://localhost:3000.

### Roadmap

Going forward, I'd like to add a home / welcome page rather than defaulting to the exercises page. Right now, the newsletter subscription in the footer is not functional. I'd like to make that a real feature. I'd also like to implement some additional functionality like dynamic 'Add to Routine' or 'Remove from Routine' buttons on the exercises page based off of the user's current routine. I'd also like the option to provide feedback on exercises and view other user's public routines. Some other small things are pop-ups to confirm delete requests and page re-rendering.
