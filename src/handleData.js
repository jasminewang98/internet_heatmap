const json = require("../data/data.json");
const data = json.data;

const countries = data.map(country => country.attributes.name);
// console.log(countries);

const speedObject = data.map(country => country.relationships.data_points.data[11]);

const speed = speedObject.map(speedObject => speedObject.attributes.value);
console.log(speed);