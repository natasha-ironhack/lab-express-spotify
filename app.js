require("dotenv").config();

const express = require("express");
const hbs = require("hbs");

// require spotify-web-api-node package here:
let SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({
  clientId: "fcecfc72172e4cd267473117a17cbd4d",
  clientSecret: "a6338157c9bb5ac9c71924cb2940e1a7",
  redirectUri: "http://www.example.com/callback",
});

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// setting the spotify-api goes here:
spotifyApi.setAccessToken("<your_access_token>");

// Our routes go here:
//lalalalalalll

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
