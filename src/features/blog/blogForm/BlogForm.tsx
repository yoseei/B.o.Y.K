import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import scss from "./BlogForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { createBlog } from "../blogSlice";
import { Link } from "react-router-dom";

type Inputs = {
  blogTitle: string;
  blogContent: string;
};

const BlogForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleCreate = (data: Inputs) => {
    const DD = new Date();
    const year = DD.getFullYear();
    const month = DD.getMonth() + 1;
    const date = DD.getDate();
    const currentDate = `${year}/${month}/${date}`;
    dispatch(
      createBlog({
        title: data.blogTitle,
        content: data.blogContent,
        createDate: currentDate,
      })
    );
    reset();
  };

  return (
    <div className={scss.root}>
      <div className={scss.container}>
        <form
          action=""
          className={scss.form}
          onSubmit={handleSubmit(handleCreate)}
        >
          <div className={scss.title_wrapper}>
            <TextField
              id="outlined-basic"
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
              multiline
              rows={16}
              {...register("blogContent", { required: true })}
              variant="outlined"
              className={scss.content_input}
            />
            <div className={scss.content_display}></div>
          </div>
          <button
            type="submit"
            className={scss.button}
            onClick={() => console.log("投稿しました")}
          >
            <Link to="/list">投稿する</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
