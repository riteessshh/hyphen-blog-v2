import React from "react";
import axios from "axios";
import Navbar from "./component/home/navbar";
import List from "./component/articles/art-card";
import "./art-styles.css";

function Article() {
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:4000/articles/";

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
        <div className="art-list">
          {post.map((item) => (
            <div>
              <List
                link={`/articles/${item._id}`}
                key={item.id}
                title={item.title}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Article;
