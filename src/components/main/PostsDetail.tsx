import React, { useState, useEffect } from "react";
import DeleteModal from "../UIKit/DeleteModal";
import PrimaryButton from "../UIKit/PrimaryButton";
import scss from "./PostsDetail.module.scss";

// type PropTypes = {
//   id: number;
//   title: string;
//   content: string;
//   createDate: string;
//   updateDate: string;
//   likes: number;
//   completed: boolean;
// };
const PostsDetail = () => {
  // const [blogData, setBlogData] = useState<PropTypes[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/blogs")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBlogData(data);
  //     });
  // }, []);

  // console.log(blogData);

  return (
    <div className={scss.root}>
      <div className={scss.contents_container}>
        <div className={scss.title_wrapper}>
          <p className={scss.title}>test</p>
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
