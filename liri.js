require("dotenv").config();

var Spotify = require ('node-spotify-api');
var axios = require ("axios");
var moment = require ("moment");

var keys = require ("./keys");
console.log(keys.spotify)

var userChoice = process.argv[2];

switch (userChoice){
    case "concert-this":
    console.log("concert")
    break;
    case "spotify-this-song":
    console.log("spotify");
    break;
    case "movie-this":
    console.log("movie");
    break;
    case "do-what-it-says":
    console.log("whatever");
    break;
    default: 
    console.log("please enter something")

    break;

    default:

}
//code that will pull the search keywords for spotify and print//
//results back to the console//
spotify.search({type: 'track', query: songName, limit: 1}, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);  
    } 

    
    console.log("\nArtists: " + data.tracks.items[0].artists[0].name);
    console.log("\nSong Title: " + data.tracks.items[0].name);
    console.log("\nPreview URL: " + data.tracks.items[0].preview_url);
    console.log("\nAlbum Title: " + data.tracks.items[0].album.name);

});

// Default song that will be pulled up when no user input is provided
function defaultSong() {

    songName = "I want it that way"}