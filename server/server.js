let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const pw = "horimiya1234";

mongoose.connect(
  "mongodb+srv://admin-ritesh:" + pw + "@cluster0.cuwyw.mongodb.net/hyphenDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// --------------------- for getting articles -----------------------------

const artsSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  content: String,
  time: String,
  image: String,
  link: String,
});

const Art = new mongoose.model("Art", artsSchema);

// app.get("/", function (req, res) {
//   res.send("hello!");
// });

app.get("/articles", function (req, res) {
  Art.find({}, function (err, foundArt) {
    // console.log(foundPost);
    res.send(foundArt);
  });
});

app.get("/articles/:art_id", function (req, res) {
  let id = req.params.art_id;

  Art.findById(id, function (err, foundArt) {
    if (err) {
      console.log(err);
    } else {
      res.send(foundArt);
    }
  });
});

app.get("/randomarticle", function (req, res) {
  Art.find({}, function (err, foundArt) {
    // console.log(foundPost);
    var x = Math.floor(Math.random() * 15 + 1);
    res.send(foundArt[x]);
  });
});

// ---------------------------- for getting posts -----------------------------

const postsSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  time: String,
  image: String,
  link: String,
});

const Post = new mongoose.model("Post", postsSchema);

app.get("/posts", function (req, res) {
  Post.find({}, function (err, foundArt) {
    // console.log(foundPost);
    res.send(foundArt);
  });
});

app.get("/posts/:post_id", function (req, res) {
  let id = req.params.post_id;

  Post.findById(id, function (err, foundArt) {
    if (err) {
      console.log(err);
    } else {
      res.send(foundArt);
    }
  });
});

app.get("/randompost", function (req, res) {
  Post.find({}, function (err, foundArt) {
    // console.log(foundPost);
    var x = Math.floor(Math.random() * 15 + 1);
    res.send(foundArt[x]);
  });
});

// ---------------------------- for getting headings -----------------------------

const headingsschema = new mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  time: String,
  image: String,
  link: String,
});

const Heading = new mongoose.model("Heading", headingsschema);

app.get("/headings", function (req, res) {
  Heading.find({}, function (err, foundArt) {
    // console.log(foundPost);
    res.send(foundArt);
  });
});

app.get("/headings/:heading_id", function (req, res) {
  let id = req.params.heading_id;

  Heading.findById(id, function (err, foundArt) {
    if (err) {
      console.log(err);
    } else {
      res.send(foundArt);
    }
  });
});

app.get("/randomheading", function (req, res) {
  Heading.find({}, function (err, foundArt) {
    // console.log(foundPost);
    var x = Math.floor(Math.random() * 15 + 1);
    res.send(foundArt[x]);
  });
});

app.get("/contact", function (req, res) {
  console.log("contact");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  // app.get("*", (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // })
}

app.listen(port, () => {
  console.log(`Server is start at ${port}`);
});
