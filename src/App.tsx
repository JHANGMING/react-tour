import { Routes ,Route} from "react-router-dom"
import Home from "./components/Home"
import Layout from "./Layout"
import About from "./components/About"




function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
