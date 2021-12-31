# Digital Health Service Components Web Viewer

Hello! This is a work in progress.

## Getting Started

_NOTE:_ The instructions below are written primarily for UNIX based operating systems.

1. Make sure you have Node.js >14 installed. If you have different projects with different node requirements, a tool like [nvm](https://github.com/nvm-sh/nvm) can help you switch between versions.
2. This project uses [yarn](https://yarnpkg.com/), a package manager. You can install yarn on your system with NPM, with the terminal command:

```
npm install yarn
```

3. To install dependencies, navigate into the `web` folder, and enter:

```
yarn
```

4. Now, whenever you want to run the project and develop, run:

```
yarn dev
```

This spins up a quick little server using the `http-server` package, and runs `babel` to listen to changes in the .jsx files and compiles them to .js.

5. Head on over to `http://localhost:8080/` in your favorite browser and you should see the site running locally!

6. Give a co-worker a compliment.
