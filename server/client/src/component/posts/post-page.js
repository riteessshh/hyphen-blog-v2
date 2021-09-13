import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../home/navbar";
import Footer from "../home/footer";
// import image from "./images/art-image.png";
// import image2 from "./images/other-art1.png";
// import image3 from "./images/other-art2.png";
// import arrow from "./images/white-arrow.svg";
import "./pstyles.css";

function Post(props) {
  const { id } = useParams();
  // console.log(id);
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:4000/posts/" + id;

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <Navbar color="white" />
      <div className="art-container">
        <div className="heading">
          <div className="heading-image">
            <img src={post.image} />
            <div className="filter"></div>
          </div>
          <h1>{post.title}</h1>
        </div>
        <div className="content">
          <p className="byline">
            by {post.author ? "by" + post.author : "anonymous"} Dated on{" "}
            {post.time}
          </p>
          <div className="art-data">
            <p>{post.subtitle}</p>
          </div>
          <hr className="endline" />
        </div>
        <div className="button">
          <div className="share">
            <p>Share on</p>
          </div>
          <div className="back">
            <a href="/posts">back</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Post;
