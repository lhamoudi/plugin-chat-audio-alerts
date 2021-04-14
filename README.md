# Chat Audio Alerts Flex Plugin

This plugin will play an audible notification when a new chat message arrives, or any new task arrives.

For more detail on the Flex SDK that enables this, see [Flex Sound & Audio](https://www.twilio.com/docs/flex/developer/ui/sound-and-audio) and [AudioPlayerManager API](https://assets.flex.twilio.com/docs/releases/flex-ui/1.25.0/AudioPlayerManager.html)

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).


## Prerequisites

To deploy this plugin, you will need:
- An active Twilio account with Flex provisioned and running v.1.18.0 or higher where you have owner, admin, or developer permissions. Refer to the [Flex Quickstart](https://www.twilio.com/docs/flex/quickstart/flex-basics#sign-up-for-or-sign-in-to-twilio-and-create-a-new-flex-project) to get started.
- npm version 5.0.0 or later installed (type `npm -v` in your terminal to check)
- Node.js version 10.12.0 or later installed (type `node -v` in your terminal to check)
- Twilio CLI along with the Flex CLI Plugin and Serverless Plugin. Run the following in a command shell:
   ```
     # Install the Twilio CLI
     npm install twilio-cli -g
     # Install the Serverless and Flex as Plugins
     twilio plugins:install @twilio-labs/plugin-serverless
     twilio plugins:install @twilio-labs/plugin-flex@beta
   ```

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
npm run deploy
```

This will publish your plugin as a Private Asset that is accessible by the Functions & Assets API. If you want to deploy your plugin as a Public Asset, you may pass --public to your deploy command:

```bash
npm run deploy --public
```

### Twilio Serverless Deployment

1. Set up all dependencies above: i.e. the Twilio CLI packages.

2. Clone this repository.

3. Copy `public/appConfig.example.js` to `public/appConfig.js`.

4. Run `npm install`.

5. Copy `./serverless/.env.example` to `./serverless/.env` and populate the appropriate environment variables.

6.  Change into `./serverless/` then run `twilio serverless:deploy`

7. Copy and save the domain returned when you deploy a function.

8. From the root directory, copy `.env.example` to `.env`. 

9. Open the `.env` file in a text editor of your choice. Modify the `REACT_APP_SERVICE_BASE_URL` property to the Domain name you copied previously. Make sure to prefix it with "https://".

11. Run `twilio flex:plugins:deploy` from the root directory

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.