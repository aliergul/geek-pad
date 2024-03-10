import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";
import Login from "./pages/Auth/Login";
import { useEffect } from "react";
import SignUp from "./pages/Auth/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(userLoggedIn);
  }, [isLoggedIn]);

  const onLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/login">
            {isLoggedIn === "true" ? (
              <Redirect to={`${localStorage.getItem("path") ?? "/"}`} />
            ) : (
              <div className="w-full">
                <Login onLogin={onLogin} />
              </div>
            )}
          </Route>
          <Route exact path="/sign-up">
            <div className="w-full">
              <SignUp />
            </div>
          </Route>
          {isLoggedIn === "true" ? (
            <>
              <div className="w-60 bg-sidebar rounded-lg justify-center flex">
                <Sidebar />
              </div>
              <div className="w-full">
                <Content />
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
