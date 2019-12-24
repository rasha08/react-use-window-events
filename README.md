# react-use-window-events

> React hook for handling window events, by exposing simple API, you just register a callback that you want to call on window event and the hook takes over, it also cleans up after itself, so you dont have to worry about unsubscribing event handlers 

[![NPM](https://img.shields.io/npm/v/react-use-window-events.svg)](https://www.npmjs.com/package/react-use-window-events) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-window-events
```

## Usage

```tsx
import * as React from 'react'

import MyComponent from 'react-use-window-events'

class Example extends React.Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## License

MIT © [rasha08](https://github.com/rasha08)
