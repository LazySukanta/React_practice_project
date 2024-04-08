import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherUser = "Chai or react"

const ReactElement = React.createElement(
  'a',
  {href: "https://google.com",target:"_blank"},
  'CLICK FOR GOOGLE',
  anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp/>
    // MyApp()
    ReactElement
)