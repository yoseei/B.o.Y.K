import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import DeleteModal from "../../../components/UIKit/DeleteModal";
import scss from "./BlogDetail.module.scss";
import {
  deleteBlog,
  fetchBlogs,
  handleModalOpen,
  selectIsModalOpen,
  selectSelectedBlog,
} from "../blogSlice";
import { AppDispatch } from "../../../app/store";

const BlogDetail = () => {
  const blogData = useSelector(selectSelectedBlog);
  const isModalOpen = useSelector(selectIsModalOpen);
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(handleModalOpen(false));
  }, []);
  console.log(isModalOpen);

  const handleLink = () => {
    history.push(`/edit/${blogData.id}`);
  };

  const selectedId = blogData.id;
  const handleDelete = async () => {
    dispatch(handleModalOpen(true));
    // if (isModalOpen) {
    //   await dispatch(deleteBlog(selectedId));
    //   await dispatch(fetchBlogs());
    //   alert("記事を削除しました。");
    //   history.push("/list");
    // }
  };

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
          <button onClick={handleLink}>編集する</button>
        </div>
        <div className={scss.delete}>
          <button onClick={handleDelete}>削除する</button>
        </div>
      </div>
      {isModalOpen ? <DeleteModal /> : null}
    </div>
  );
};

export default BlogDetail;
