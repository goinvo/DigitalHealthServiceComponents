# Digital Health Service Components

We need to see the major components of a digital health service from data to data use to decision-making.

Much like the OSI model (https://en.wikipedia.org/wiki/OSI_model), the open source digital health service components is a stack of common elements and terms.

In-progress whack-a-prototype:
https://goinvo.github.io/DigitalHealthServiceComponents/

Terminology wiki:
https://github.com/goinvo/DigitalHealthServiceComponents/wiki/Terminology

1 line definition a high schooler can understand, followed by 2-3 sentences of details, ending with 1-3 real, visual examples + references.

...

The current Figma design:
https://www.figma.com/file/9CFtzTP0IHgIvG67NoOVkL/Health-IT-Digital-Service-Components?node-id=817%3A461

The web viewer and README can be found in:
https://github.com/goinvo/DigitalHealthServiceComponents/tree/main/web

Please comment and give feedback.
hello@goinvo.com

## Web Viewer Instructions

Please note the website is contained in the root folder `docs/`. The reason it's set up this way so that github-pages will automatically build the contents of that folder, and make the preview available.

_NOTE:_ The instructions below are written primarily for UNIX based operating systems.

1. Make sure you have Node.js >14 installed. If you have different projects with different node requirements, a tool like [nvm](https://github.com/nvm-sh/nvm) can help you switch between versions.
2. This project uses [yarn](https://yarnpkg.com/), a package manager. You can install yarn globally on your system with `npm`, with the terminal command:

```
npm install -g yarn
```

(If the command does not work, you may need to run `sudo` infront of it, followed by your password as prompted. This is because `yarn` is being installed globally on your system.)

3. To install dependencies, navigate into the `web` folder, and enter:

```
yarn
```

(If running this does not immediately work, close your terminal window and re-open it, so that the `yarn` command is added to the command line.)

4. Now, whenever you want to run the project and develop, run:

```
yarn dev
```

This spins up a quick little server using the `http-server` package, and runs `babel` to listen to changes in the .jsx files and compiles them to .js.

5. Head on over to `http://localhost:8080/` in your favorite browser and you should see the site running locally!

6. Give a co-worker a compliment.

## Deploy to GitHub Pages Preview

GitHub Pages is currently set to preview the content in the `docs` folder. Just push to master!

Once you've pushed, check [the build status](https://github.com/goinvo/DigitalHealthServiceComponents/actions), and after a few minutes, you should be able to preview it on:
[https://goinvo.github.io/DigitalHealthServiceComponents/](https://goinvo.github.io/DigitalHealthServiceComponents/)
