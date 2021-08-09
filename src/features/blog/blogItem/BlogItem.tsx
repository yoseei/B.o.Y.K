import React from "react";
import { useDispatch } from "react-redux";
import scss from "./BlogItem.module.scss";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import { selectBlog } from "../blogSlice";
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
  const dispatch = useDispatch();
  const handleLink = () => {
    dispatch(selectBlog(blog));
  };
  return (
    <div className={scss.root}>
      <div className={scss.checkBox}>
        <Checkbox checked={blog.completed} />
      </div>
      <div className={scss.id}>{blog.id}</div>
      <div className={scss.title}>
        <Link to={`/detail/${blog.id}`} onClick={handleLink}>
          {blog.title}
        </Link>
      </div>
      <div className={scss.createDate}>{blog.createDate}</div>
      <div className={scss.updateDate}>{blog.updateDate}</div>
      <div className={scss.like}>{blog.likes}</div>
    </div>
  );
};

export default BlogItem;
