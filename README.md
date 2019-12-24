# React useWindowEvents

## Description

**React hook for handling window events, by exposing simple API, you just register a callback that you want to call on window event and the hook takes over, it also cleans up after itself, so you dont have to worry about unsubscribing event handlers**


## Installation

```bash
npm install react-use-window-events
```

## About

The library exposes simple API, you just register a callback that you want to fire every time the event from provided event list fires, that callback is then attached as a listener these window events. You don't have to worry about cleaning up  after yourself that is all done under the hood when the component that consumes this hook unmounts

```js
 useWindowEvents: (
   events: string[],
   callback:EventListenerOrEventListenerObject
 ) => void
```

## Usage
```js
import React, { useEffect } from 'react'
import { useWindowEvents } from 'react-use-window-events'

import { handleWindowsResize } from '...'

const App = () => {

  useEffect(() => {
    useWindowEvents(['resize'], handleWindowsResize);
  }, [])

  return (
    <div>
      App content goes here
    </div>
  )
}
export default App;
```

## Authors

[Radovan Stevanovic](https://github.com/rasha08)

[Aleksandar Ilic](https://github.com/cili93)

## License

MIT © [rasha08](https://github.com/rasha08)