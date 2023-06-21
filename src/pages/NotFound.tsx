import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      NotFound page pleas go to{" "}
      <Link to="/" style={{ color: "black" }}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
