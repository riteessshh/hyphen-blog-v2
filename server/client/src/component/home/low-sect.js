import React from "react";
import axios from "axios";
import "./hstyles.css";
import image1 from "./images/post-sample-1.png";
import image2 from "./images/post-sample-2.png";
import image3 from "./images/post-sample-3.png";
import arrow from "./images/Arrow.svg";
import { Link } from "react-router-dom";

function Section() {
  const [post_a, setPost_a] = React.useState(null);
  const [post_b, setPost_b] = React.useState(null);
  const [post_c, setPost_c] = React.useState(null);
  const baseURL = "/randompost";

  function fetchRandom(given_post) {
    axios.get(baseURL).then((response) => {
      given_post(response.data);
      console.log(response.data);
    });
  }

  React.useEffect(() => {
    fetchRandom(setPost_a);
    fetchRandom(setPost_b);
    fetchRandom(setPost_c);
  }, []);

  if (!post_a) return null;
  if (!post_b) return null;
  if (!post_c) return null;
  return (
    <div className="lower-section">
      <header>
        <h1>trending post</h1>
      </header>
      <div className="posts">
        <div className="card">
          <div className="image">
            <img src={post_a.image} />
          </div>
          <div className="content">
            <h3>{post_a.title}</h3>
            <p className="byline">
              by {post_a.author ? post_a.author : "anonymous"}
            </p>
            <p>
              {post_a.subtitle ? post_a.subtitle : "no content available!"}
              .....
            </p>
          </div>
          {/* <Link to={`/posts/${post_a._id}`}>
            Read more <img src={arrow} />
          </Link> */}
        </div>
        <div className="card">
          <div className="image">
            <img src={post_b.image} />
          </div>
          <div className="content">
            <h3>{post_b.title}</h3>
            <p className="byline">
              by {post_b.author ? post_b.author : "anonymous"}
            </p>
            <p>
              {post_b.subtitle ? post_b.subtitle : "no content available!"}
              .....
            </p>
          </div>
          {/* <Link to={`/posts/${post_b._id}`}>
            Read more <img src={arrow} />
          </Link> */}
        </div>
        <div className="card">
          <div className="image">
            <img src={post_c.image} />
          </div>
          <div className="content">
            <h3>{post_c.title}</h3>
            <p className="byline">
              by {post_c.author ? post_c.author : "anonymous"}
            </p>
            <p>
              {post_c.subtitle ? post_c.subtitle : "no content available!"}
              .....
            </p>
          </div>
          {/* <Link to={`/posts/${post_c._id}`}>
            Read more <img src={arrow} />
          </Link> */}
        </div>
      </div>
      <hr className="breakline" />
    </div>
  );
}

export default Section;
