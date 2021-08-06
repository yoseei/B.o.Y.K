import React from "react";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div className={scss.root}>
      <div className={scss.container}>
        <div className={scss.title_wrapper}>
          <h1>B.o.Y.K</h1>
        </div>
        <div className={scss.newPost_wrapper}>
          <p>
            <Link to="/create">新規投稿</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
