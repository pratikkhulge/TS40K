import React from "react";

function Blog(props) {
  return (
    <div>
      <h4>Blog Component</h4>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Salary: {props.salary}</p>
    </div>
  );
}

export default Blog;
