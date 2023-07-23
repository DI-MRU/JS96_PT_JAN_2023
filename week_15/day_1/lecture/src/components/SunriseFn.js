import { useEffect, useRef, useState } from "react";

const SunriseFn = () => {
  const [city, setCity] = useState("Cassis");
  const [lat, setLat] = useState(-20.166453527115934);
  const [lng, setLng] = useState(57.484071732027914);
  const [hourSunrise, setHourSunrise] = useState();

  const changeCity = (e) => {
    let cityName = e.target.name;
    if (cityName === "new york") {
      setCity("New York");
      setLat(40.73061);
      setLng(-73.935242);
    } else if (cityName === "paris") {
      setCity("Paris");
      setLat(48.864716);
      setLng(2.349014);
    }
  };

  const citySelect = useRef();
  const paragraphRef = useRef();
  const changeCityRef = () => {
    console.log(paragraphRef.current.innerText);
    const cityName = citySelect.current.value;
    if (cityName === "new york") {
      setCity("New York");
      setLat(40.73061);
      setLng(-73.935242);
    } else if (cityName === "paris") {
      setCity("Paris");
      setLat(48.864716);
      setLng(2.349014);
    }
  };

  function fetchSunriseSunset() {
    fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lng)
      .then((resp) => resp.json()) //return a promise
      .then((resp) => {
        setHourSunrise(resp.results.sunrise);
        console.log(resp);
      })
      .catch(function (error) {
        console.error(`We got the error ${error}`);
      });
  }

  // This hook runs on mount and whenever there is an update
  // useEffect(() => {
  //   fetchSunriseSunset();
  // });

  // This hook will run once, when the component is mounted
  useEffect(() => {
    fetchSunriseSunset();
  }, []);

  // This hook whenever the state of city or lat or lng changes
  useEffect(() => {
    fetchSunriseSunset();
  }, [city, lat, lng]);

  return (
    <div>
      <p ref={paragraphRef}>
        The hour of the sunrise in {city} is {hourSunrise}
      </p>
      {/* <button type="button" name="new york" onClick={changeCity}>
        {" "}
        Get the hour of the sunrise in New York
      </button>
      <button type="button" name="paris" onClick={changeCity}>
        {" "}
        Get the hour of the sunrise in Paris
      </button> */}

      <label>City: </label>
      <select ref={citySelect}>
        <option value="new york">New York</option>
        <option value="paris">Paris</option>
      </select>
      <button type="button" onClick={changeCityRef}>
        Fetch sunrise
      </button>
    </div>
  );
};

export default SunriseFn;
