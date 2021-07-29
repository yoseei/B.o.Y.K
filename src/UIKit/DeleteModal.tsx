import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import scss from "./DeleteModal.module.scss";
import PrimaryButton from "./PrimaryButton";

const DeleteModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={scss.body_container}>
      <div className={scss.confirm_wrapper}>
        <p className={scss.confirm}>本当に削除してもよろしいですか？</p>
      </div>
      <div className={scss.delete_wrapper}>
        <p className={scss.delete}>削除する</p>
      </div>
      <div className={scss.cancel_wrapper} onClick={handleClose}>
        <p className={scss.cancel}>キャンセル</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        delete
      </button> */}
      <PrimaryButton text={"削除する"} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default DeleteModal;
