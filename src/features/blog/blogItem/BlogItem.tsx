import React from "react";
import scss from "./BlogItem.module.scss";
import { Checkbox } from "@material-ui/core";

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
  return (
    <div className={scss.root}>
      <div className={scss.checkBox}>
        <Checkbox checked={blog.completed} />
      </div>
      <div className={scss.id}>{blog.id}</div>
      <div className={scss.title}>{blog.title}</div>
      <div className={scss.createDate}>{blog.createDate}</div>
      <div className={scss.updateDate}>{blog.updateDate}</div>
      <div className={scss.like}>{blog.likes}</div>
    </div>
  );
};

export default BlogItem;
