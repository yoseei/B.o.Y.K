import React from "react";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <div className={scss.root}>
      <div className={scss.container}>
        <div className={scss.title_wrapper}>
          <h1>B.o.Y.K</h1>
        </div>
        <div className={scss.newPost_wrapper}>
          <p>新規投稿</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
