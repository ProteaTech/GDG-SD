
# Web Development

We will be using Next.js, specifically Next.js version 13 and later to develop out web application. Versions of Next.js prior to V13 will be incompatible, however many of the concepts will still be applicable.

Additionally, we will be using Vercel to host the web app for free and Firebase to provide common use case services such as Authentication, Database, Analytics and more. 


## Acknowledgements

 - [Next JS](https://nextjs.org/)
 - [Vercel](https://vercel.com/about)
 - [Firebase](https://firebase.google.com/)


## Prerequisites

### Tech stack

Our tech stack is comprised of the following:

**Client:** Next.JS, Firebase, TailwindCSS

**Server:** Node

To get started for the first event you will need to have the following installed on your machine:

- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

    *Alternatively* - You can download the zip file from the repository home page, however this won't give you access to futher updates without re downloading, as well as limit your ability to contribute in the future.

- NodeJs and npm: You can find documentation to install these [Here](https://nodejs.org/en/download)


### Development environment

This project is using VS Code as the primary editor, and it is encouraged that you do the same in order to have a similar, and seamless development environment, with shared settings. You can download VS Code [Here](https://code.visualstudio.com/download).

In order to enforce uniformity, and fend of the strange cats who think using two spaces is better than a single tab, we are using the Prettier plugin for VS Code. We are also using the TailwindCSS intelisense plugin to provide autocompletion of pesky css classes. It still wont help you center a div though. Consult ChatGPT for this.

Both plugins have been added to the workspace recoomendations for VS Code so you should be prompted to install them upon opening the repository.
## Run Locally

Clone the project using SSH (HTTPS is no longer allowed). You can also download the zip file from the repository homepage

```bash
  git clone git@github.com:ProteaTech/GDG-SD.git
```

Go to the project directory

```bash
  cd GDG-SD/web
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

To deploy your web app, you will need to have an account with Vercel, as well as a conected Github account.

Each deployment is automatically triggered based on changes to your remote github repository, with options to customize your deployment based on specific branches.

You can read more about the installation process [Here](https://vercel.com/docs/concepts/deployments/overview)



## Lessons

In our first event we will be covering Web technologies, Next.js version 13, it's additions to web development and deploying your own copy of the web app to Vercel.

In future events we will cover adding Firebase to the project in order to acomplish common use cases like authentication, databse management, analytics, file storage and more.
## Roadmap

- Add Firebase to the project

- Customize your deployment lifecycle

- Deep dive into Firebase for the web

