// imr shortcut
import React from "react";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import { Route, Switch } from "react-router-dom";

function App() {
  // Route takes 2 props : the path which declares the URL and the component to load when path url matches
  // the exact is very important because otherwise / will be in all (/, /about and /courses)

  // container is bootstrap component
  // When you give Container in div class the frame size will be fixed for all screen.
  // and if you give container_fluid in div class frame size will take the size of screen pannel
  // container is white background with sharp corners
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

// Export in the class enables other places to import the class
// The default enables importing
export default App;
