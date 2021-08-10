import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../../../components/UIKit/DeleteModal";
import scss from "./BlogDetail.module.scss";
import { selectSelectedBlog } from "../blogSlice";

const BlogDetail = () => {
  const blogData = useSelector(selectSelectedBlog);

  return (
    <div className={scss.root}>
      <div className={scss.contents_container}>
        <div className={scss.title_wrapper}>
          <p className={scss.title}>{blogData.title}</p>
        </div>
        <div className={scss.updateDate_likes_wrapper}>
          <div className={scss.updateDate_wrapper}>
            <p>最終更新日時： {blogData.updateDate}</p>
          </div>
          <div className={scss.likes_wrapper}>
            <p>♥{blogData.likes} いいね</p>
          </div>
        </div>
        <div className={scss.text_wrapper}>
          <p>{blogData.content}</p>
        </div>
      </div>
      <div className={scss.button_wrapper}>
        <div className={scss.edit}>
          <button>編集する</button>
        </div>
        <div className={scss.delete}>
          <button>削除する</button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
