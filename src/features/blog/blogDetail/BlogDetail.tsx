import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DeleteModal from "../../../components/UIKit/DeleteModal";
import scss from "./BlogDetail.module.scss";
import { selectSelectedBlog } from "../blogSlice";

const PostsDetail = () => {
  const blogData = useSelector(selectSelectedBlog);

  console.log(blogData.title);
  return (
    <div className={scss.root}>
      <div className={scss.contents_container}>
        <div className={scss.title_wrapper}>
          <p className={scss.title}>{blogData.title}</p>
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
        <div className={scss.edit}></div>
        <div className={scss.delete}>
          <DeleteModal />
        </div>
      </div>
    </div>
  );
};

export default PostsDetail;
