// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./landing page/LandingPage";
import './landing page/landing-page.css'
import SignIn from "./signin page/SignIn";
import "./signin page/SignIn.css";
import SignUp from "./signup page/SignUp";
import "./signup page/SignUp.css";
import Otplogin from "./otplogin/Otplogin";
import "./otplogin/otplogin.css";

function App() {
  return (
    <body>
      
      {/* <LandingPage/>
      <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Otplogin /> */}

      <BrowserRouter>
        
        <Routes>
          <Route>
            <Route  index path="/" element={<LandingPage/>} />
            <Route path="/signin" element={<SignIn/>} />
              <Route path="/signup" element={<SignUp/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
