// The persistent data will be the history of searched cities

// I need functionality for the submission form

var lon;
var lat;

const APIkey = "e7489becf00f32dd1d856bb063abf1cf";
const queryURL = 'http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIkey}';

// Figure out how to retrieve geographical coodorinates given a city name