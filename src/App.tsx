import GoogleLogIn from "./GoogleLogIn";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";
import { stateType } from "./state/store";

function App() {

  const {user} = useSelector((state:stateType) => state.logged)

  return (
    <div className="App"> 
      <BrowserRouter>
      {user!==null?
      <nav>
        <Link to="/logInGoogle">Log in with google</Link>
        <Link to="/logIn">Log in</Link>
        <Link to="/SignIn">Sign in</Link>
        <Link to="/welcome">Welcome</Link>
      </nav>:
      <nav>
        <Link to="/logInGoogle">Log in with google</Link>
        <Link to="/logIn">Log in</Link>
        <Link to="/SignIn">Sign in</Link>
      </nav>
      }
      <Routes>
        <Route path="logInGoogle" element={<GoogleLogIn />}/>
        <Route path="SignIn" element={<SignIn />}/>
        <Route path="logIn" element={<LogIn />}/>
        <Route path="welcome" element={<Welcome />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
