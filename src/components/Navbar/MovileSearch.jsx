import React from "react";
// import { useHistory } from "react-router";

function MovileSearch(props) {
  const className = props.className;
  // const history = useHistory();
  return (
    <a
      // onClick={() => history.push()}
      className={`${className}`}
    >
      <img className={`mr-3`} src={props.src} />
    </a>
  );
}

export default MovileSearch;
