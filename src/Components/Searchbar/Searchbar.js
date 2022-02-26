import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MyContext } from "../../App";
import "./Searchbar.css";

const Searchbar = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const [, , , setCity] = useContext(MyContext);

  const handleSubmit = (e) => {
    const searchField = document.getElementById("searchField");
    setCity(searchField.value);
  };

  const handleEnter = (e) => {
    const searchField = document.getElementById("searchField");
    if (e.key === "Enter") {
      setCity(searchField.value);
    }
  };

  return (
    <div>
      <div className="sb bg-light  rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter City Name"
            id="searchField"
            className="form-control border-0 bg-light"
            onKeyPress={handleEnter}
          />
          <div className="input-group-append">
            <button
              id="button-addon1"
              type="submit"
              className="btn btn-link text-primary"
              onClick={handleSubmit}
            >
              {searchIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
