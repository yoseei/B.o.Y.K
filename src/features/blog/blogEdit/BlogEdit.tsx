import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import scss from "./BlogEdit.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { editBlog, selectSelectedBlog } from "../blogSlice";
import { fetchBlogs } from "../../blog/blogSlice";
import { AppDispatch } from "../../../app/store";

type Inputs = {
  blogTitle: string;
  blogContent: string;
  updateDate: string;
};

const DD = new Date();
const year = DD.getFullYear();
const month = DD.getMonth() + 1;
const date = DD.getDate();
const currentDate = `${year}/${month}/${date}`;

const BlogEdit: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch: AppDispatch = useDispatch();
  const selectedBlogData = useSelector(selectSelectedBlog);
  const history = useHistory();
  // const postsData = useSelector(selectPosts);

  const handleEdit = async (data: Inputs) => {
    await dispatch(
      editBlog({
        id: selectedBlogData.id,
        title: data.blogTitle,
        content: data.blogContent,
        updateDate: currentDate,
        createDate: selectedBlogData.createDate,
        likes: selectedBlogData.likes,
        completed: selectedBlogData.completed,
      })
    );
    reset();
    await dispatch(fetchBlogs());
    alert("編集しました。");
    history.push("/list");
  };

  return (
    <div className={scss.root}>
      <div className={scss.container}>
        <form
          action=""
          className={scss.form}
          onSubmit={handleSubmit(handleEdit)}
        >
          <div className={scss.title_wrapper}>
            <TextField
              id="outlined-basic"
              defaultValue={selectedBlogData.title}
              label="タイトル"
              variant="outlined"
              {...register("blogTitle", { required: true })}
              className={scss.text_field}
            />
          </div>
          <div className={scss.content_wrapper}>
            <TextField
              id="outlined-multiline-static"
              label="本文"
              defaultValue={selectedBlogData.content}
              multiline
              rows={16}
              {...register("blogContent", { required: true })}
              variant="outlined"
              className={scss.content_input}
            />
            <div className={scss.content_display}></div>
          </div>
          <button type="submit" className={scss.button}>
            編集する
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;
