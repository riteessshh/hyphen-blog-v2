import React from "react";
import axios from "axios";
import Navbar from "../home/navbar";
import Post from "./post-card";
import "./pstyles.css";

function Article() {
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:4000/posts/";

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <Navbar color="black" />
      <div className="container">
        <h1>Home</h1>
        <div className="posts-list">
          {post.map((item) => (
            <div>
              <Post
                link={`/posts/${item._id}`}
                key={item.id}
                title={item.title}
                image={item.image}
                sub={item.subtitle}
                author={item.author}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Article;
