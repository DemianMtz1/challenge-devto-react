import React from "react";

function NavAvatar(props) {
  const className = props.className;

  return (
    <a>
      <span>
        <img
          src="https://cdn3.iconfinder.com/data/icons/stroke/53/Alien-100.png"
          id={props.id}
          alt={props.alt}
          // style="width: 40px; height: 40px;"
          className={`ml-3 mr-3 md-0 ${className} `}
        />
      </span>
    </a>
  );
}

export default NavAvatar;
