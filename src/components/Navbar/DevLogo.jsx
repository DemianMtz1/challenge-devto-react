import React from "react";

// class DevLogo extends React.Component {
//   render() {
//     return <h1 className="text-uppercase">dev</h1>;
//   }
// }

// export default DevLogo;

function DevLogo(props) {
  const className = props.className;

  return <h1 className={`${className}`}>DEV</h1>;
}

export default DevLogo;
