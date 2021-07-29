import React from "react";
import DeleteModal from "../../UIKit/DeleteModal";
import PrimaryButton from "../../UIKit/PrimaryButton";
import scss from "./PostsDetail.module.scss";

const PostsDetail = () => {
  // const handleEdit = () => {
  //   console.log("編集ボタンクリック！");
  // };
  return (
    <div className={scss.root}>
      <div className={scss.contents_container}>
        <div className={scss.title_wrapper}>
          <p className={scss.title}>テストタイトル</p>
        </div>
        <div className={scss.updateDate_likes_wrapper}>
          <div className={scss.updateDate_wrapper}>
            <p>最終更新日時： 2021/07/27</p>
          </div>
          <div className={scss.likes_wrapper}>
            <p>♥１４ いいね</p>
          </div>
        </div>
        <div className={scss.text_wrapper}>
          <p>
            本文です 本文です 本文です 本文です 本文です 本文です 本文です
            本文です 本文です 本文です 本文です 本文です 本文です 本文です
            本文です 本文です 本文です 本文です 本文です 本文です 本文です
            本文です 本文です 本文です 本文です 本文です 本文です 本文です
            本文です 本文です 本文です 本文です 本文です 本文です
          </p>
        </div>
      </div>
      <div className={scss.button_wrapper}>
        <div className={scss.edit}>
          <PrimaryButton
            text={"編集する"}
            onClick={() => console.log("Click!")}
          />
        </div>
        <div className={scss.delete}>
          <DeleteModal />
        </div>
      </div>
    </div>
  );
};

export default PostsDetail;
