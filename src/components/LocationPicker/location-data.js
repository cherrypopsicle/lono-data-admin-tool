export const getPrediction = async query => {
    const proxy = `https://cors-anywhere.herokuapp.com/`
    return await fetch(proxy+
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&location=45.501689,-73.567256&radius=500&key=AIzaSyAA7bklwrasWP5qP4sN7uu2Y-c8_p5V7C0`,
      {
        method: "GET",
        mode: 'cors'
      }
    )
      .then(data => {
        return data.json();
      })
      .then(prediction => {
        return prediction;
      });
  };

  
  export const getPlace = async place_id => {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    return await fetch(
      proxy +
        `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyAA7bklwrasWP5qP4sN7uu2Y-c8_p5V7C0`
    )
      .then(data => {
        return data.json();
      })
      .then(place => {
        return place.results[0];
      });
  };