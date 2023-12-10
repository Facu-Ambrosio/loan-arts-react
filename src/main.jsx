import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { GlobalStateProvider } from './context/globalStateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>
)
