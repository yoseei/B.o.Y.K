import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectBlogs } from "../blogSlice";
import scss from "./BlogList.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import BlogItem from "../blogItem/BlogItem";

type BlogTypes = {
  id: number;
  title: string;
  content: string;
  createDate: string;
  updateDate: string;
  likes: number;
  completed: boolean;
};
const BlogList = () => {
  const [blogData, setBlogData] = useState<any[]>([]);


  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogData(data);
      });
    return;
  }, []);

  return (
    <div className={scss.root}>
      <div className={scss.lists_container}>
        <div className={scss.header}>
          <div className={scss.checkBox}>
            <Checkbox
              color="secondary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
          <div className={scss.id}>ID</div>
          <div className={scss.title}>タイトル</div>
          <div className={scss.createDate}>作成日時</div>
          <div className={scss.updateDate}>最終更新日時</div>
          <div className={scss.like}>いいね</div>
        </div>
        {blogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      <div className={scss.listsNumber_wrapper}>
        <p className={scss.number}>1-2of2</p>
        <p className={scss.bracket_left}>{"<"}</p>
        <p className={scss.bracket_right}>{">"}</p>
      </div>
    </div>
  );
};

export default BlogList;
