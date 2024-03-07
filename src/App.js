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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(userLoggedIn);
  }, []);

  const onLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <div className="w-full">
                <Login onLogin={onLogin} />
              </div>
            )}
          </Route>
        </Switch>
        {isLoggedIn ? (
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
      </div>
    </Router>
  );
}

export default App;
