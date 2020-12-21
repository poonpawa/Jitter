# Jitter
App for finding design/UX jobs



Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd .\jitter
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

## Steps for Setup

- `npm install -g @ionic/cli native-run cordova-res` - Run the following in the command line terminal to install the Ionic CLI (ionic), native-run, used to run native binaries on devices and simulators/emulators, and cordova-res, used to generate native app icons and splash screens
- `ionic build` - to build the ionic project before adding platform
- `ionic start jitter blank --type=react --capacitor` - to create a project
- Next, we will install a couple of helper libraries for working with Capacitor.

The React Hooks library makes working with Capacitor in React a breeze by providing some custom hooks for each of the specific plugins.

Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic PWA Elements library.

Both packages are separate dependencies, so install them next:

`cd jitter`
`npm install @ionic/react-hooks @ionic/pwa-elements` 