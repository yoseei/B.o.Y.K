import React, { useState } from "react";
import scss from "./MarkDown.module.scss";
import { AppDispatch } from "./app/store";
import { createBlog } from "./features/blog/blogSlice";
import "easymde/dist/easymde.min.css";
import { fetchBlogs } from "./features/blog/blogSlice";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";
import marked from "marked";
import { RouteComponentProps } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

type Inputs = {
  blogTitle: string;
  blogContent: string;
};
// delete file name
marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang.split(":")[0]]).value;
  },
});

const DD = new Date();
const year = DD.getFullYear();
const month = DD.getMonth() + 1;
const date = DD.getDate();
const currentDate = `${year}/${month}/${date}`;

const MarkDown: React.FC<RouteComponentProps> = (props) => {
  const dispatch: AppDispatch = useDispatch();

  const [markdown, setMarkdown] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = async (data: Inputs) => {
    await dispatch(
      createBlog({
        title: data.blogTitle,
        content: data.blogContent,
        createDate: currentDate,
      })
    );
    reset();
    await dispatch(fetchBlogs());
    props.history.push("/");
  };
  return (
    <div className={scss.root}>
      <form
        action=""
        className={scss.form}
        onSubmit={handleSubmit(handleCreate)}
      >
        <div className={scss.title_wrapper}>
          <TextField
            id="outlined-basic"
            fullWidth={true}
            label="タイトル"
            variant="outlined"
            {...register("blogTitle", { required: true })}
            style={{ padding: "" }}
          />
        </div>
        <div className={scss.mde_container}>
          <div className={scss.mde}>
            <SimpleMDE onChange={(e) => setMarkdown(e)} />
          </div>
          <div id="body" className={scss.preview}>
            <span dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MarkDown;
