import React, { useState } from "react";
import scss from "./PostsList.module.scss";
import Checkbox from "@material-ui/core/Checkbox";

const PostsList = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={scss.root}>
      <div className={scss.lists_container}>
        <div className={scss.header}>
          <div className={scss.checkBox}>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
          <div className={scss.id}>ID</div>
          <div className={scss.title}>タイトル</div>
          <div className={scss.createDate}>作成日時</div>
          <div className={scss.updateDate}>最終更新日時</div>
          <div className={scss.like}>いいね</div>
        </div>
      </div>
      <div className={scss.listsNumber_wrapper}>
        <p className={scss.number}>1-2of2</p>
        <p className={scss.bracket_left}>{"<"}</p>
        <p className={scss.bracket_right}>{">"}</p>
      </div>
    </div>
  );
};

export default PostsList;
