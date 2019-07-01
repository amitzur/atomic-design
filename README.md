# Eyes-Storybook

Applitools Eyes SDK for [Storybook](http://storybook.js.org).

## Installation

### Install npm package

Install Eyes-Storybook as a local dev dependency in your tested project:

```bash
npm install --save-dev @applitools/eyes-storybook
```

### Applitools API key

In order to authenticate via the Applitools server, you need to supply the Eyes-Storybook SDK with the API key you got from Applitools. Read more about how to obtain the API key [here](https://applitools.com/docs/topics/overview/obtain-api-key.html).

To to this, set the environment variable `APPLITOOLS_API_KEY` to the API key before running your tests.
For example, on Linux/Mac:

```bash
export APPLITOOLS_API_KEY=<your_key>
```

And on Windows:

```bash
set APPLITOOLS_API_KEY=<your_key>
```

## Usage

After completing the installation and defining the API key, you will be able to run Eyes-Storybook from the command line and let it take screenshots of all your stories.

If your project is using the default storybook config folder (i.e. `<project_folder>/.storybook`), then run the following command:

```bash
npx eyes-storybook
```

### Configuring local storybook server

Normally, Eyes-Storybook starts a storybook dev server in an available port between 9000-9010 for the duration of the tests. It's possible to pass arguments to Eyes-Storybook to configure the local storybook server:

* `--storybook-port OR -p`: Port to run storybook (passed as `-p` to `start-storybook`).
* `--storybook-host OR -h`: Host to run storybook (passed as `-h` to `start-storybook`).
* `--storybook-config-dir OR -c`: Directory where to load Storybook configurations from (passed as `-c` to `start-storybook`)
* `--storybook-static-dir OR -s`: Directory where to load static files from, comma-separated list (passed as `-s` to `start-storybook`)

### Standalone server

As noted in the previous section, Eyes-Storybook starts a storybook dev server. If you wish to start the server outside of Eyes-Storybook, or test a production build that's available at a certain URL, then just specify the URL for the storybook in the command line (or in the configuration file, see [Advanced configuration](#advanced-configuration) below).

For example:

```bash
npx eyes-storybook -u http://localhost:6006
```

Or for a production storybook:

```bash
npx eyes-storybook -u http://react.carbondesignsystem.com/
```

### Command line arguments

The full list of command line arguments can be viewed by running `npx eyes-storybook --help`:

```txt
Usage: eyes-storybook.js [options]

Options:
  --help                                            Show help                                                      [boolean]
  --version, -v                                     Show the version number                                        [boolean]
  --conf, -f                                        Path to applitools.config.js config file                        [string]
  --storybook-url, -u                               URL to storybook                                                [string]
  --storybookPort, -p, --storybook-port             Port to run Storybook                                           [number]
  --storybookHost, -h, --storybook-host             Host to run Storybook                                           [string]
  --storybookConfigDir, -c, --storybook-config-dir  Path to Storybook's config folder (defaults to .storybook)      [string]
  --storybookStaticDir, --storybook-static-dir      Path to Storybook's static files folder                         [string]
  --showStorybookOutput, --show-storybook-output    Whether or not you want to see Storybook output                [boolean]
  --exitcode, -e                                    If tests failed close with non-zero exit code                  [boolean]
```

## Concurrency

The default level of concurrency for free accounts is `10`. This means that only up to 10 visual tests can run in parallel, and therefore the execution might be slow.
If your account does support a higher level of concurrency, it's possible to pass a different value by specifying it in the property `concurrency` in the applitools.config.js file (see [Advanced configuration](#advanced-configuration) section below).

If you are interested in speeding up your visual tests, contact sdr@applitools.com to get a trial account and faster tests with more concurrency.

## Advanced configuration

In addition to command-line arguments, it's possible to define the following configuration for tests:

| Property name             | Default value               | Description   |
| -------------             |:-------------               |:-----------   |
| `storybookUrl`            | undefined                   | URL to storybook (also available as command-line argument). |
| `storybookPort`           | 9000                        | Port to run Storybook (also available as command-line argument). |
| `storybookHost`           | localhost                   | Host to run Storybook (also available as command-line argument). |
| `storybookConfigDir`      | .storybook                  | Path to Storybook's config folder (also available as command-line argument). |
| `storybookStaticDir`      | undefined                   | Path to Storybook's static files folder (also available as command-line argument). |
| `showStorybookOutput`     | undefined                   | Whether or not you want to see Storybook output (also available as command-line argument). |
| `exitcode`                | false                       | If tests failed close with non-zero exit code (also available as command-line argument). |
| `browser`                 | { width: 800, height: 600, name: 'chrome' } | The size and browser of the generated screenshots. Currently, `firefox`, `chrome`, `edge`, `ie10` and `ie11` are supported. For more info, see the [browser section below](#configuring-the-browser).|
| `showLogs`                | false                       | Whether or not you want to see logs of the Eyes-Storybook plugin. |
| `saveDebugData`           | false                       | Whether to save troubleshooting data. See the troubleshooting section of this doc for more info. |
| `batchId`                 | random                      | Provides ability to group tests into batches. Read more about batches [here](https://applitools.com/docs/topics/working-with-test-batches/how-to-group-tests-into-batches.html). |
| `batchName`               | undefined                   | Provides a name to the batch. |
| `batchSequenceName`               | undefined | Name for managing batch statistics. |
| `baselineEnvName`         | undefined                   | The name of the environment of the baseline. |
| `envName`                 | undefined                   | A name for the environment in which the application under test is running. |
| `ignoreCaret`             | false                       | Whether to ignore or the blinking caret or not when comparing images. |
| `matchLevel`              | undefined                   | The test-wide match level to use when checking application screenshot with the expected output. Possible values are `Strict`, `Exact`, `Layout` and `Content`. Read more about match levels [here](http://support.applitools.com/customer/portal/articles/2088359). |
| `branchName`              | undefined                   | The name of the branch. |
| `baselineBranchName`      | undefined                   | The name of the baseline branch. |
| `parentBranchName`        | undefined                   | Sets the branch under which new branches are created. |
| `proxy`                   | undefined                   | Sets the proxy settings to be used in network requests to Eyes server. |
| `saveFailedTests`         | false                       | Set whether or not failed tests are saved by default (saved as baseline). |
| `saveNewTests`            | false                       | Set whether or not new tests are saved by default (saved as baseline). |
| `serverUrl`               | Default Eyes server URL     | The URL of Eyes server |
| `compareWithParentBranch` | false                       |  |
| `ignoreBaseline`          | false                       |  |
| `runInDocker`             | false                       | If you are having issues running the SDK in docker, set this flag to `true`. See more info [below](#running-eyes-storybook-in-docker) |
| `puppeteerOptions`        | undefined                   | Options to send to `puppeteer.launch`. This is a low-level configuration and should be used with great care. |
| `tapFilePath`             | undefined                   | Directory path of a results file. If set, then a [TAP](https://en.wikipedia.org/wiki/Test_Anything_Protocol#Specification) file is created in this directory, the file is created with the name eyes.tap and contains the Eyes test results. |
| `waitBeforeScreenshots`   | undefined                   | Selector, function or timeout. If `waitBeforeScreenshots` is a number then the argument is treated as time in milliseconds to wait before each screenshot is taken. If `waitBeforeScreenshots` is a string then the argument is treated as a selector or xpath, (depending on whether or not it starts with '//') for an element to wait for before each screenshot is taken. If `waitBeforeScreenshots` is a function, then the argument is treated as a predicate to wait for before each screenshot is taken.|
| `include`                 | true                        | Specifies which stories should be visually tested. Visual baselines will be created only for the components specified. For more information, see [per component configuration - include](#include). |
| `variations`              | undefined                   | Specifies additional variations for all or some of the stories. For example, RTL. For more information, see [per component  configuration - variations](#variations).|

There are 2 ways to specify test configuration:

1) Environment variables
2) The `applitools.config.js` file

The list above is also the order of precedence, which means that if you specify a property as an environment variable, it will override the value defined for the same property in the `applitools.config.js` file.

### Method 1: Environment variables

The name of the corresponding environment variable is in uppercase, with the `APPLITOOLS_` prefix, and separating underscores instead of camel case:

```js
APPLITOOLS_APP_NAME
APPLITOOLS_SHOW_LOGS
APPLITOOLS_BATCH_ID
APPLITOOLS_BATCH_NAME
APPLITOOLS_BATCH_SEQUENCE_NAME
...
// all other configuration variables apply
```

### Method 2: The `applitools.config.js` file

It's possible to have a file called `applitools.config.js` at the current working directory (the directory you are at when running the `eyes-storybook` script). In this file specify the desired configuration, as an exported CommonJS module. For example:

```js
module.exports = {
  appName: 'My app',
  showLogs: true,
  batchName: 'My batch'
  ...
  // all other configuration variables apply
}
```

## Configuring the browser

Eyes-Storybook will take a screenshot of the page as specified in the `browser` configuration parameter.

It's also possible to send an array of browsers, for example in the `applitools.config.js` file:

```js
module.exports = {
  browser: [
    {width: 800, height: 600, name: 'firefox'},
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'ie11'}
  ]
}
```

### Device emulation

To enable chrome's device emulation, it's possible to send a device name and screen orientation, for example:

```js
module.exports = {
  browser: {
    deviceName: 'iPhone X',
    screenOrientation: 'landscape',
    name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
  }
}
```

Possible values for screen orientation are `landscape` and `portrait`, and if no value is specified, the default is `portrait`.

The list of device names is taken from [chrome devtools predefined devices](https://raw.githubusercontent.com/chromium/chromium/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/devtools/front_end/emulated_devices/module.json), and can be obtained by running the following command in a unix-based shell (installing [`jq`](https://stedolan.github.io/jq/) might be needed):

```sh
curl -s https://raw.githubusercontent.com/chromium/chromium/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/devtools/front_end/emulated_devices/module.json | jq '.extensions[].device.title'
```

In addition, it's possible to use chrome's device emulation with custom viewport sizes, pixel density and mobile mode, by passing `deviceScaleFactor` and `mobile` in addition to `width` and `height`. For example:

```js
module.exports = {
  browser: {
    width: 800,
    height: 600,
    deviceScaleFactor: 3,
    mobile: true,
    name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
  }
}
```

## Per component configuration

There are two ways to provide configuration for a specific story, or a group of stories.

1. **As an argument to the story** - It's possible to pass a third argument to storybook's `.add` function, to customize each story. An `eyes` property on the parameters object can be specified with configuration properties.

2. **In the global configuration file, `applitools.config.js`** - If a function is specified for one of the properties below, it will be called for each story, and will be passed the story's metadata, of the structure `{name, kind, parameters}`, where `name` is the name of the component, `kind` is the string built by storybook for the category, e.g. `Forms|Input/Text`, and `parameters` are the third argument to storybook's `.add` function. The function should return the configuration value for the specific property+story.

Specifying a value locally in the story takes precedence over the global config value.

For example, for the config property `include` (described below), here's how to specify the value for a group of stories in the `applitools.config.js` file:

```js
// Exclude all stories with a name that start with [SKIP]
module.exports = {
  include: ({name, kind, parameters}) => {
    return !/^\[SKIP\]/.test(name)
  }
}
```

The following properties are supported:

### `include`

When `false`, the component will not be visually tested. For example:

```js
// This story will not be tested visually
storiesOf('Some kind', module)
  .add(
    'Some story',
    () => <div>I am visually perfect!</div>,
    {eyes: {include: false}}
  )
```

### `variations`

An array of string values, which specifies which variations to add for this story. For each value, an additional visual test will be executed for the component. It will have the same name only with a `[<variation name>]` suffix, and when the component is loaded, the URL will have an additional param: `eyes-variation=<variation name>`.

This can accommodate many use cases, for example RTL (right to left).
It's now possible for the component to render its variation version when the relevant URL param is present. For Example, here's a storybook that handles an RTL variation:

```js
const isRTL = new URL(window.location).searchParams.get('eyes-variation') === 'RTL';

if (isRTL) {
  document.documentElement.setAttribute('dir', 'rtl')
}

// 2 visual tests will be created - one for LTR and one for RTL
storiesOf('Components that support RTL', module)
  .add(
    'Some story',
    () => <div>
      <span>I am visually perfect!<span>
      <span>{isRTL ? ' and rendered right to left as well :)' : ''}</span>
    </div>,
    {eyes: {variations: ['RTL']}}
  )
```

### `ignore`

A single or an array of regions to ignore when checking for visual differences. For example:

```js
storiesOf('Components with ignored region', module)
  .add(
    'Some story',
    () => <div>
      <span>I am visually perfect!<span>
      <span className="ignore-this">this should be ignored</span>
    </div>,
    {eyes: {
      ignore: [{selector: '.ignore-this'}]
    }}
  )
});
```

## Running Eyes-Storybook in Docker

When running the SDK in docker, there might be issues related to properly launching the internal chrome browser via puppeteer. If you seem to have such issues, set `runInDocker: true` in your config file. This will pass the internal chrome browser special arguments, as described [here](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#tips).

If you still have issues, you might need to follow the instructions to use your own chromium browser in the docker container, and point that to the SDK's puppeteer. Follow the instructions [here](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker) and set the `executablePath` via the `puppeteerOptions`. For example, `applitools.config.js`:

```js
module.exports = {
  puppeteerOptions: {
    executablePath: '/usr/bin/chromium-browser'
  }
}
```

## Dealing with dynamic data

Sometimes components render dynamic data, such as dates, or random data. This creates a challenge when testing these components. The way we recommend to address this issue is to insert code into your storybook which normalizes the data (uses fixed dates, or a specific seed), when it is being run in an automated environment.

Eyes storybook makes it possible for components to be aware that they are being tested. There will be a specific query parameter on the URL of the story's iframe: `?eyes-storybook=true`.

This way it's possible to write a story like this:

```js
const isBeingTested =
    new URL(window.location).searchParams.get('eyes-storybook')

const SOME_FIXED_DATE = 354060000000

const date = new Date(isBeingTested ? SOME_FIXED_DATE : undefined)

storiesOf('Some kind', module).add('Date', () => <div>{date}</div>)
```

## Troubleshooting

If issues occur, the `saveDebugData` config property can be set to true in order to save helpful information. The information will be saved under a folder named `.applitools` in the current working directory. This could be then used for getting support on your issue.
