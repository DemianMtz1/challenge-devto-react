import React from "react";

// class NavSearch extends React.Component {
//   render() {
//     return <input type="search" placeholder="Search..." />;
//   }
// }

// export default NavSearch;

function NavSearch(props) {
  const className = props.className;
  return (
    <input type="search" placeholder="Search..." className={`${className}`} />
  );
}

export default NavSearch;
