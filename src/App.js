import AboutUs from "./components/pages/AboutUs";
import Features from "./components/pages/Features";
import Solution from "./components/pages/Solution";
import Pricing from "./components/pages/Pricing";
import SignIn from "./components/pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbarservice from "./components/Navbarservice";
import Landing from "./components/Landing";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/AboutUs" element={<AboutUs />}></Route>
          <Route exact path="/Features" element={<Features />}></Route>
          <Route exact path="/Solution" element={<Solution />}></Route>
          <Route exact path="/Pricing" element={<Pricing />}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          {/* <Route exact path="/Navbarservice" element={<Navbarservice/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
