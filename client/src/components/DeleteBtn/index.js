import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function SaveBtn(props) {
  return (
    <button className="delete-btn" {...props} role="button" tabIndex="0">
      Save Book
    </button>
  );
}

export function ViewSaveBtn(props) {
  return (
    <button className="delete-btn save-btn" {...props} role="button" tabIndex="0">
      View Saved Books
    </button>
  );
}

export function DeleteBtn(props) {
  return (
    <button className="delete-btn" {...props} role="button" tabIndex="0">
     Delete Book
    </button>
  );
}
