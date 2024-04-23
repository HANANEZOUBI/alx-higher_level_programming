#!/usr/bin/node

// Require the 'request' module
const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    // check for errors in the request
    console.error(error);
  } else if (response.statusCode === 200) {

    const movieData = JSON.parse(body); // Parse the JSON body response

    // Iterate over each character in the movie
    for (const characterURL of movieData.characters) {
      request(characterURL, (error, response, charBody) => {
        if (error) {
          console.log(error);
        } else if (response.statusCode === 200) {
          console.log(JSON.parse(charBody).name);
        }
      });
    }
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
