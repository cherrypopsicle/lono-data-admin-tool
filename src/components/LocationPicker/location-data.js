export const getPrediction = async query => {
    const proxy = `https://cors-anywhere.herokuapp.com/`
    return await fetch(proxy+
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&location=45.501689,-73.567256&radius=500&key=AIzaSyCDM-ZuLC_6o7GMZ5M1MY7VUU7xLS8q6-0`,
      {
        method: "GET",
        mode: 'cors'
      }
    )
      .then(data => {
        return data.json();
        console.log(data);
      })
      .then(prediction => {
        return prediction;
        console.log(prediction);
      });
  };

  
  export const getPlace = async place_id => {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    return await fetch(
      proxy +
        `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyCDM-ZuLC_6o7GMZ5M1MY7VUU7xLS8q6-0`
    )
      .then(data => {
        console.log(data);
        return data.json();
      })
      .then(place => {
        console.log(place);
        return place.results[0];
      });
  };