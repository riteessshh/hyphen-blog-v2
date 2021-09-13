import React from "react";
import Home from "./home";
import ArticleHome from "./articles-home";
import Article from "./component/articles/art-page";
import Contact from "./component/aboutNcontact/contact";
import About from "./component/aboutNcontact/about";
import "./App.css"
// import Navbar from "./component/home/navbar";
import Posts from "./component/posts/posts-home";
import Post from "./component/posts/post-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <ArticleHome />
          </Route>
          <Route exact path="/articles/:id">
            <Article />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/posts/:id">
            <Post />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
