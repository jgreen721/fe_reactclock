import './App.css'
import {Info,Overlay} from "./components"
import {AppProvider} from "./context/AppContext"
import {FlexContainer} from './wrapper'

function App() {

return (
<AppProvider>
  <div className="app">
    <Overlay/>

<FlexContainer/>
<Info/>
  </div>

  </AppProvider>
)
}

export default App
