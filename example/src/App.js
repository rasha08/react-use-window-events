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
