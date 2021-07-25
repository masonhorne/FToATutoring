import React, { useEffect } from "react";
import "../../styles/bootstrap.min.css";
import '../../styles/universal.css';

export default function Button(props) {
  return (
    <div>
      <button
        onClick={props.onPress}
        class="btn btn-outline-primary"
        type="button"
      >
        {props.title}
      </button>
    </div>
  );
}

export function CustomButton(props) {
  return (
    <div>
      <button class={"btn btn-outline-" + props.variant}>{props.title}</button>
    </div>
  );
}
