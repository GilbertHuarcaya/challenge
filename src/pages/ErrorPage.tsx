import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <>
    <div>There was an error!</div>
    <button type="button">
      <Link to="/">Go back Home</Link>
    </button>
  </>
);

export default ErrorPage;
