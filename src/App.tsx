import { Routes ,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Tour from "./components/Tour"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import { Container, Wrapper } from "./Layout/styled"
import { Tourlist } from "./components/Tour/Tourlist"
import TourDetail from "./components/Tour/TourDetail"





function App() {
  return (
    <>
    <Wrapper>
        <Header/>
        <Container>
          <Routes>
            <Route >
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/tour" element={<Tour/>}>
                <Route index element={<Tourlist />} />
                <Route path=":Id" element={<TourDetail />} />
              </Route>
            </Route>
          </Routes>
        </Container>
        <Footer/>
    </Wrapper>
    </>
  )
}

export default App
