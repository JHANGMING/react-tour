import { Routes ,Route} from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import Tour from "./page/Tour"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import { Container, Wrapper } from "./Layout/styled"
import { Tourlist } from "./page/Tour/Tourlist"
import TourDetail from "./page/Tour/TourDetail"
import Notfind from "./page/Notfind"





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
              <Route path="*" element={<Notfind/>}/>
            </Route>
          </Routes>
        </Container>
        <Footer/>
    </Wrapper>
    </>
  )
}

export default App
