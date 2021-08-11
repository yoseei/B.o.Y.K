import React from "react";
import { useDispatch } from "react-redux";
import scss from "./BlogItem.module.scss";
import { Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  changeCompleted,
  createSelectedBlog,
  fetchBlogs,
  fetchSelectedBlog,
} from "../blogSlice";
import { AppDispatch } from "../../../app/store";

type PropTypes = {
  blog: {
    id: number;
    title: string;
    content: string;
    createDate: string;
    updateDate: string;
    likes: number;
    completed: boolean;
  };
};
const BlogItem: React.FC<PropTypes> = ({ blog }) => {
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();

  const handleLink = async () => {
    await dispatch(createSelectedBlog(blog));
    await dispatch(fetchSelectedBlog());
    await dispatch(fetchBlogs());
    history.push(`/detail/${blog.id}`);
  };
  const handleCheckBox = async () => {
    await dispatch(changeCompleted(blog));
    await dispatch(fetchBlogs());
  };
  return (
    <div className={scss.root}>
      <div className={scss.checkBox}>
        <Checkbox checked={blog.completed} onClick={handleCheckBox} />
      </div>
      <div className={scss.id}>{blog.id}</div>
      <div className={scss.title} onClick={handleLink}>
        {blog.title}
      </div>
      <div className={scss.createDate}>{blog.createDate}</div>
      <div className={scss.updateDate}>{blog.updateDate}</div>
      <div className={scss.like}>{blog.likes}</div>
    </div>
  );
};

export default BlogItem;
