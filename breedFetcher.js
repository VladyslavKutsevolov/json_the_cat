const request = require('request');
const argv = process.argv[2];

request(
  `https://ai.thecatapi.com/v1/breeds/search?name=${argv}`,
  (error, response, body) => {
    if (error) console.log('error code', error.code);
    try {
      const data = JSON.parse(body)[0];
      getCatDescription(data);
    } catch (error) {
      console.log('Opps, something went wrong: \n', error);
    }
  }
);

const getCatDescription = (catDescription) => {
  console.log(catDescription.description);
};
