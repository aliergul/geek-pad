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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="wrapper">
        <div className="w-full">
          <Switch>
            <Route exact path="/login">
              {isLoggedIn ? (
                <Redirect to="/" />
              ) : (
                <Login onLogin={handleLogin} />
              )}
            </Route>
          </Switch>
        </div>
        <Route path="/">
          {isLoggedIn ? (
            <>
              <div className="w-60">
                <Sidebar />
              </div>
              <div className="w-full">
                <Content />
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </div>
    </Router>
  );
}

export default App;
