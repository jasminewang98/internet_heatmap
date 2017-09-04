const json = require("../data/data.json");
const data = json.data;

const countries = data.map(country => country.attributes.name);
// console.log(countries);

const totalLines = data.reduce(function(sum, countries) {
    return sum + 1
}, 0)
console.log(totalLines + " lines in json file");

// const speedObject = data.map(country => country.relationships.data_points.data[11]);
const speedObject = data.map(country => country.relationships.data_points.data);

// console.log(speedObject);

const speedIndicator = speedObject.filter(metric => {
  if (typeof(metric.attributes) !== 'undefined') {
    if (metric.attributes.indicator === "speedkbps") {
    return true;
    }
  return false;
  }
});

console.log(speedIndicator);

const speedObjectNotNull = speedObject.filter(country => {
  //only using data that exists!
    if (typeof country !== 'undefined' && typeof country.attributes !== 'undefined' && typeof country.attributes.value !== 'undefined') {
        return true;
    }
    return false;
});

const speed = speedObjectNotNull.map(speedObject => speedObject.attributes.value);
// console.log(speed);