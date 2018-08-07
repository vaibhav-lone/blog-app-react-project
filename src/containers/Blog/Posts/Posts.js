import React, { Component } from "react";
import axios from "../../../axios";
import "./Posts.css";
import Post from "../../../components/Post/Post";
// import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: "MSD" };
        });
        this.setState({ posts: updatedPosts });
        //   console.log(response.data);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  selectPostHandler = id => {
    // console.log(this.props);
    // this.props.history.push("/posts/" + id);
    this.props.history.push({ pathname: "/posts/" + id });
  };
  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Oops !!! Something went wrong...</p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/posts/" + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectPostHandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
