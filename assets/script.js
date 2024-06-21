// The persistent data will be the history of searched cities

// I need functionality for the submission form

const APIKey = "e7489becf00f32dd1d856bb063abf1cf";

var city;

const queryURL = 'http://api.openweathmap.org/data/2.5/weather?q=${city}&appid=${APIKey}';

// Figure out how to assign user input to city variable