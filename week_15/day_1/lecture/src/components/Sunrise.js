import React from "react";

class Sunrise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Tel Aviv",
      lat: 32.0853,
      lng: 34.7818,
    };
  }

  changeCity = (event) => {
    let cityName = event.target.name;
    if (cityName == "new york") {
      this.setState({ city: "New York", lat: 40.73061, lng: -73.935242 });
    } else if (cityName == "paris") {
      this.setState({ city: "Paris", lat: 48.864716, lng: 2.349014 });
    }
  };

  fetchSunriseSunset() {
    fetch(
      "https://api.sunrise-sunset.org/json?lat=" +
        this.state.lat +
        "&lng=" +
        this.state.lng
    )
      .then((resp) => resp.json()) //return a promise
      .then(
        (resp) => this.setState({ hourSunrise: resp.results.sunrise }) //add a new attribute to the state
      )
      .catch(function (error) {
        console.error(`We got the error ${error}`);
      });
  }

  componentDidMount() {
    this.fetchSunriseSunset();
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.city !== prevProps.city) {
      //required, or the componentDidUpdate will run indefinitely
      this.fetchSunriseSunset();
    }
  }

  render() {
    return (
      <div>
        <p>
          The hour of the sunrise in {this.state.city} is{" "}
          {this.state.hourSunrise}
        </p>
        <button type="button" name="new york" onClick={this.changeCity}>
          {" "}
          Get the hour of the sunrise in New York
        </button>
        <button type="button" name="paris" onClick={this.changeCity}>
          {" "}
          Get the hour of the sunrise in Paris
        </button>
      </div>
    );
  }
}

export default Sunrise;
