const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`,
    (error, response, body) => {
      if (!error) {
        const data = JSON.parse(body);
        if (data[0]) {
          const { description } = data[0];
          callback(null, description);
        }
      } else {
        callback(error, null);
      }
    }
  );
};

module.exports = fetchBreedDescription;
