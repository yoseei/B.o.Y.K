import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import DeleteModal from "../../../components/UIKit/DeleteModal";
import scss from "./BlogDetail.module.scss";
import {
  changeLikes,
  fetchBlogs,
  handleModalOpen,
  selectIsModalOpen,
  selectSelectedBlog,
} from "../blogSlice";
import { AppDispatch } from "../../../app/store";

const BlogDetail = () => {
  const selectedBlogData = useSelector(selectSelectedBlog);
  const [likes, setLikes] = useState<number>(selectedBlogData.likes);
  const isModalOpen = useSelector(selectIsModalOpen);
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(handleModalOpen(false));
  }, []);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const handleLink = async () => {
    await dispatch(fetchBlogs());
    history.push(`/edit/${selectedBlogData.id}`);
  };

  const handleDelete = async () => {
    dispatch(handleModalOpen(true));
  };

  const handleLikes = async () => {
    await dispatch(changeLikes(selectedBlogData));
    await dispatch(fetchBlogs());
    setLikes(selectedBlogData.likes + 1);
  };
  console.log(selectedBlogData);
  return (
    <div className={scss.root}>
      <div className={scss.contents_container}>
        <div className={scss.title_wrapper}>
          <p className={scss.title}>{selectedBlogData.title}</p>
        </div>
        <div className={scss.updateDate_likes_wrapper}>
          <div className={scss.updateDate_wrapper}>
            <p>最終更新日時： {selectedBlogData.updateDate}</p>
          </div>
          <div className={scss.likes_wrapper}>
            <p>
              ♥{likes}
              <span onClick={handleLikes} className={scss.like}>
                いいね！
              </span>
            </p>
          </div>
        </div>
        <div className={scss.text_wrapper}>
          <p>{selectedBlogData.content}</p>
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
