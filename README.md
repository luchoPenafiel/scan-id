# ScanId

## Technology

### Main stack
This project was bootstrapped with [Create React App](https://create-react-app.dev/docs/adding-typescript/) and [TypeScript](https://www.typescriptlang.org/).

### API
The API used for interaction with the camera is:
- [MediaDevices.getUserMedia()](https://developer.mozilla.org/es/docs/Web/API/MediaDevices/getUserMedia)
- [MediaStreamTrack.stop()](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/stop)

### Styles
The framework used for styling is [Styled-components](https://styled-components.com/).

### Test
This proyect use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to implment test.

### Best practices
We recommend read this articules for contributing:
- [Event handler naming in react](https://jaketrent.com/post/naming-event-handlers-react)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [How to write your CSS](https://dev.to/lucasromerodb/write-better-css-properties-2-min-read-1ohg)

## Folder Structure
```
.
├── public                         # All public files.
    ├── fonts                      # Custom fonts.
    ├── icons                      # SVG icons.
    ├── images                     # Placeholder images.
├── src
    ├── api                        # API calls.
    ├── components                 # The stateless reusable components.
        ├── Component.tsx          # The component itselft.
        ├── Component.styles.tsx   # Styles
        ├── Component.test.tsx.    # Tests
    ├── hooks                      # Custom hooks.
    ├── views                      # Main views.
└── README.md                      # The first page the user will see when visiting the repo.
```

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
