import React from "react";
import scss from "./BlogForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../../components/UIKit/PrimaryButton";
type Inputs = {
  blogTitle: string;
  blogContent: string;
};
const BlogForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: Inputs) => {
    console.log(data.blogTitle);
    console.log(data.blogContent);
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
          <button type="submit" className={scss.button}>
            投稿する
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
