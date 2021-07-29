import React from "react";
import PrimaryButton from "../../UIKit/PrimaryButton";
import scss from "./PostsCreate.module.scss";

const PostsCreate = () => {
  return (
    <div className={scss.root}>
      <div className={scss.title_wrapper}>
        <p>タイトル</p>
        <input></input>
      </div>
      <div className={scss.contents_preview_container}>
        <div className={scss.contents_wrapper}>
          <p>入力欄</p>
          <textarea></textarea>
        </div>
        <div className={scss.preview_wrapper}>
          <p>プレビュー</p>
          <div className={scss.preview_area}></div>
        </div>
      </div>
      <div className={scss.button_wrapper}>
        <PrimaryButton
          text={"投稿する"}
          onClick={() => console.log("click!")}
        />
      </div>
    </div>
  );
};

export default PostsCreate;
