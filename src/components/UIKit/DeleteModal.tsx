import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import scss from "./DeleteModal.module.scss";
import {
  deleteBlog,
  fetchBlogs,
  handleModalOpen,
  selectIsModalOpen,
  selectSelectedBlog,
} from "../../features/blog/blogSlice";
import { AppDispatch } from "../../app/store";
const DeleteModal = () => {
  const [open, setOpen] = useState(true);
  const blogData = useSelector(selectSelectedBlog);
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const isModalOpen = useSelector(selectIsModalOpen);

  const handleClose = () => {
    setOpen(false);
    dispatch(handleModalOpen(false));
  };

  const selectedId = blogData.id;
  const handleDelete = async () => {
    dispatch(handleModalOpen(true));
    if (isModalOpen) {
      await dispatch(deleteBlog(selectedId));
      await dispatch(fetchBlogs());
      alert("記事を削除しました。");
      history.push("/list");
    }
  };

  const body = (
    <div className={scss.body_container}>
      <div className={scss.confirm_wrapper}>
        <p className={scss.confirm}>本当に削除してもよろしいですか？</p>
      </div>
      <div className={scss.delete_wrapper}>
        <p className={scss.delete} onClick={handleDelete}>
          削除する
        </p>
      </div>
      <div className={scss.cancel_wrapper}>
        <p className={scss.cancel} onClick={handleClose}>
          キャンセル
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default DeleteModal;
