import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type Props = {};

const SinglePage = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      <Link to={"/blog/new"} style={{ color: "black" }}>
        Add blog
      </Link>
      {id}
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default SinglePage;
