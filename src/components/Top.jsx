import React from "react";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <>
      <h1>Topページだよ</h1>
      <p>
        新規登録は<Link to={`/Create/`}>こちら</Link>
      </p>
    </>
  );
};
