import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import AuthorsPage from "./authors/AuthorsPage";

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
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

// Export in the class enables other places to import the class
// The default enables importing
export default App;
