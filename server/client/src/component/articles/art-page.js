import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../home/navbar";
import Footer from "../home/footer";
// import image from "./images/art-image.png";
// import image2 from "./images/other-art1.png";
// import image3 from "./images/other-art2.png";
// import arrow from "./images/white-arrow.svg";
import "./astyles.css";

function Art(props) {
  const { id } = useParams();
  // console.log(id);
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:4000/articles/" + id;

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  // const [opost, setOpost] = React.useState(null);
  // const oURL = "http://localhost:4000/articles/";

  // React.useEffect(() => {
  //   axios.get(oURL).then((response) => {
  //     setOpost(response.data);
  //     // console.log(response.data);
  //   });
  // }, []);

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
            <p>{post.content}</p>
          </div>
          <hr className="endline" />
        </div>
        <div className="button">
          <div className="share">
            <p>Share on</p>
          </div>
          <div className="back">
            <a href="/articles">back</a>
          </div>
        </div>
        {/* <div className="other-arts">
          <div className="art-card">
            <div className="card-image">
              <img src={image3} />
              <div className="small-filter"></div>
            </div>
            <div className="card-content">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
              <p>
                Read more <img src={arrow} />
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
export default Art;
