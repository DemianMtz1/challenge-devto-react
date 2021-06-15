import React from "react";

function AppButton(props) {
  const className = props.className ? props.className : " ";

  if (props.type === "anchor") {
    return (
      <a className={`btn btn-link bg bg-primary ${className}`}>{props.text} </a>
    );
  }

  return (
    <button className={`btn btn button-post ${className}`} type="button">
      {props.text}
    </button>
  );
}

export default AppButton;

{
  /* <button id="post-btn-nav" class="btn button-post" data-view="newPost">
  Write a post
</button>; */
}
