import React from "react";
import axios from "axios";
import "./hstyles.css";
import image1 from "./images/up-sect.png";
import { Link } from "react-router-dom";
import { set } from "mongoose";

function Section() {
  const [art, setArt] = React.useState(null);
  // const baseURL = "http://localhost:4000/randomarticle/";

  React.useEffect(async () => {
    const res = await fetch("/randomarticle/");
    const data = await res.json();
    setArt(data);
  }, []);
  // const [num, setNum] = React.useState("01");
  // const [post_a, setPost_a] = React.useState(null);
  // const [post_b, setPost_b] = React.useState(null);
  // const [post_c, setPost_c] = React.useState(null);
  // const [post_d, setPost_d] = React.useState(null);
  // const baseURL = "/randomarticle";

  // function fetchRandom(given_post) {
  //   axios.get(baseURL).then((response) => {
  //     given_post(response.data);
  //     console.log(response.data);
  //   });
  // }

  // const handleClick = (e) => {
  //   console.log(e);
  //   let name = e.target.name;
  //   setNum(name);
  // };

  // function active(data) {
  //   if (data === "01") {
  //     setArt(post_a);
  //   } else if (data === "02") {
  //     setArt(post_b);
  //   } else if (data === "03") {
  //     setArt(post_c);
  //   } else if (data === "04") {
  //     setArt(post_d);
  //   }
  // }

  // React.useEffect(() => {
  //   fetchRandom(setPost_a);
  //   fetchRandom(setPost_b);
  //   fetchRandom(setPost_c);
  //   fetchRandom(setPost_d);
  //   handleClick();
  //   active(num);
  // }, []);

  // if (!post_a) return null;
  // if (!post_b) return null;
  // if (!post_c) return null;
  // if (!post_d) return null;

  if (!art) return null;

  return (
    <div className="section">
      <header>
        <h1>latest article</h1>
      </header>
      <div className="art-id">
        <p id="active">
          <Link to={"/articles"}>For more articles</Link>
        </p>
        {/* <p>02</p>
        <p>03</p>
        <p>04</p> */}
      </div>
      <Link to={`/articles/${art._id}`}>
        <article>
          <div className="text">
            <h1>{art.title}</h1>
            <p className="byline">by {art.author ? art.author : "anonymous"}</p>
            <p className="content">
              {art.content
                ? art.content.substring(0, 250)
                : "no content available!"}
              .....
            </p>
          </div>
          <div className="image">
            <img src={art.image ? art.image : image1} />
          </div>
        </article>
      </Link>
    </div>
  );
}

export default Section;
