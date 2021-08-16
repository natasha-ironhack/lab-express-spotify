require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const SpotifyWebApi = require("spotify-web-api-node");

// require spotify-web-api-node package here:

var spotifyApi = new SpotifyWebApi({
  clientId: "fcecfc72172e4cd267473117a17cbd4d",
  clientSecret: "a6338157c9bb5ac9c71924cb2940e1a7",
  redirectUri: "http://www.example.com/callback",
});

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

spotifyApi.setAccessToken("<your_access_token>");

// setting the spotify-api goes here:
/*
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
*/

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

// Our routes go here:

app.get("/", (req, res) => {
  res.render("index");
});

spotifyApi.getArtist("2hazSY4Ef3aB9ATXW7F5w3").then(
  function (data) {
    console.log("Artist information", data.body);
  },
  function (err) {
    console.error(err);
  }
);

app.get("/artist/:name", (req, res, next) => {
  res.send("The artist you like is " + req.query.artist);
});

app.get("/artist/:name", (req, res, next) => {
  spotifyApi.searchArtists(req.query.artist).then(
    function (data) {
      console.log(data);
    },
    function (err) {
      console.error(err);
    }
  );
  res.render("index");
});

//change made

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
