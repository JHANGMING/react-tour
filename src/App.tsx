import { Routes ,Route} from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import Tour from "./page/Tour"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import { Container, Wrapper } from "./components/Layout/styled"
import { Tourlist } from "./components/Tourlist"
import TourDetail from "./components/TourDetail"
import Notfind from "./components/Notfind"
import { TourProvider } from "./TourStore/TourReducer"


function App() {
  return (
    <>
    <Wrapper>
        <Header/>
        <Container>
        <TourProvider>
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
        </TourProvider>
        </Container>
        <Footer/>
    </Wrapper>
    </>
  )
}

export default App
