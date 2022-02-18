import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type={"text"}
      className="form-control form-search"
      onChange={(event) => {
        props.setBusqueda(event.target.value);
      }}
    />
  );
};

export default SearchBar;
