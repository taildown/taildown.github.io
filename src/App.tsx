import './App.css'
import MarkdownConverter from './MarkdownConverter'
import { type ReactElement } from 'react'

function App (): ReactElement {
  return (
    <div className="App">
      <MarkdownConverter />
    </div>
  )
}

export default App
