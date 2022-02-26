import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { MyContext } from "../../App";
import "./Home.css";

const Home = () => {
  const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;

  const [weather, setWeather, city, , loading, setLoading] = useContext(MyContext);
  console.log(weather);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3e147929795f8aa6f9736c159fe82269`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "200") {
          setWeather(data);
          setLoading(false);
        }
        if (data.cod === "404") {
          alert("maybe city not found");
        }
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  if (loading || weather.length === 0) {
    return <Spinner />;
  }

  //  console.log(weather.list[0]);

  // ~~~~~~~~~~~~~~~ dayss and dates ~~~~~~~~~~~~~~~
  // day1
  const dt_date1 = weather.list[0].dt_txt.split(" ");
  const dt = new Date(`${dt_date1[0]}`).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const day = new Date(`${dt_date1[0]}`).toLocaleDateString("en-us", {
    weekday: "long",
  });
  const day1 = new Date(`${dt_date1[0]}`).toLocaleDateString("en-us", {
    weekday: "short",
  }); //for short day

  //day2
  const dt_date2 = weather.list[7].dt_txt.split(" ");
  const day2 = new Date(`${dt_date2[0]}`).toLocaleDateString("en-us", {
    weekday: "short",
  });

  //day3
  const dt_date3 = weather.list[15].dt_txt.split(" ");
  const day3 = new Date(`${dt_date3[0]}`).toLocaleDateString("en-us", {
    weekday: "short",
  });

  //day4
  const dt_date4 = weather.list[23].dt_txt.split(" ");
  const day4 = new Date(`${dt_date4[0]}`).toLocaleDateString("en-us", {
    weekday: "short",
  });

  // ~~~~~~~~~~~~~~~ icons ~~~~~~~~~~~~~~~
  const icon1 = `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`;
  const icon2 = `https://openweathermap.org/img/wn/${weather.list[7].weather[0].icon}.png`;
  const icon3 = `https://openweathermap.org/img/wn/${weather.list[15].weather[0].icon}.png`;
  const icon4 = `https://openweathermap.org/img/wn/${weather.list[23].weather[0].icon}.png`;

  // ~~~~~~~~~~~~~~~ Temp ~~~~~~~~~~~~~~~
  const temp1 = Math.round(weather.list[0].main.temp);
  const temp2 = Math.round(weather.list[7].main.temp);
  const temp3 = Math.round(weather.list[15].main.temp);
  const temp4 = Math.round(weather.list[23].main.temp);

  return (
    <div className="">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="card1 me-3 rounded">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="upper ms-3">
                <h1>{day}</h1>
                <h3 className="my-3">{dt}</h3>
                <div className="location">
                  <h3>
                    {locationIcon} {weather.city.name}, {weather.city.country}
                  </h3>
                </div>
              </div>

              <div className="botm ms-3">
                <img src={icon1} alt="" />
                <h1>{temp1}&#8451;</h1>
                <h3>{weather.list[0].weather[0].description}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card2 roundedd">
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="upper ms-3">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Min Temp</td>
                      <td>
                        {Math.round(weather.list[0].main.temp_min)}&#8451;
                      </td>
                    </tr>

                    <tr>
                      <td>Max Temp</td>
                      <td>
                        {Math.round(weather.list[0].main.temp_max)}&#8451;
                      </td>
                    </tr>

                    <tr>
                      <td>Humadity</td>
                      <td>{Math.round(weather.list[0].main.humidity)} %</td>
                    </tr>

                    <tr>
                      <td>Wind</td>
                      <td>
                        {(weather.list[0].wind.speed * 3.6).toFixed(2)} km/h
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="botm ms-3 d-flex">
                <div className="col-sm-3 col-md-3 ">
                  <div className="bx1 d-flex flex-column justify-content-between">
                    <img className="side-icon" src={icon1} alt="" />
                    <h3>{day1}</h3>
                    <small></small>
                    <h4>{temp1}&#8451;</h4>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 ">
                  <div className="bx1 d-flex flex-column justify-content-between">
                    <img className="side-icon" src={icon2} alt="" />
                    <h3>{day2}</h3>
                    <small></small>
                    <h4>{temp2}&#8451;</h4>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 ">
                  <div className="bx1 d-flex flex-column justify-content-between">
                    <img className="side-icon" src={icon3} alt="" />
                    <h3>{day3}</h3>
                    <small></small>
                    <h4>{temp3}&#8451;</h4>
                  </div>
                </div>
                <div className="col-sm-3 col-md-3 ">
                  <div className="bx1 d-flex flex-column justify-content-between">
                    <img className="side-icon" src={icon4} alt="" />
                    <h3>{day4}</h3>
                    <small></small>
                    <h4>{temp4}&#8451;</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
