import React from "react";
import axios from "axios";
import "./hstyles.css";
import image1 from "./images/up-sect.png";

function Section() {
  const [art, setArt] = React.useState(null);
  const baseURL = "http://localhost:4000/randomarticle/";

  // function fetchRandom() {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //     console.log(response.data);
  //   });
  // }

  React.useEffect(() => {
    // fetchRandom();
    const fetchArts = async () => {
      const res = await axios.get(baseURL);
      console.log(res);
      setArt(res.data);
    };
    fetchArts();
  }, []);

  if (!art) return null;

  return (
    <div className="section">
      <header>
        <h1>latest articles</h1>
      </header>
      <div className="art-id">
        <p id="active">01</p>
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div>
      <a href={`/articles/${art._id}`}>
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
      </a>
    </div>
  );
}

export default Section;
