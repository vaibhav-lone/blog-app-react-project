import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
// import post from "../../components/Post/Post";

class Blog extends Component {
  render() {
    // console.log(posts, typeof posts);
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    search: "?quick-submit=true",
                    hash: "#submit"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/new-post" render={() => <h1>NewPosts  </h1>} /> */}
        <Switch>
          {/* Oder is important while using the Switch for routing the dom*/}
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
