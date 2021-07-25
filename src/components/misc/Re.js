import React from "react";
import "../../styles/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import '../../styles/universal.css';

export default function Misc() {
  return <Redirect to="/home" />;
}
