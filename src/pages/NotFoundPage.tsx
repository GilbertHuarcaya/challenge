import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div>404 Page Not Found!</div>
      <button type="button">
        <Link to="/">Go back Home</Link>
      </button>
    </>
  );
}

export default NotFoundPage;
