import React, { useState } from "react";
import scss from "./BlogCreate.module.scss";
import { createBlog } from "../blogSlice";
import { fetchBlogs } from "../blogSlice";
import { RouteComponentProps } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { useForm } from "react-hook-form";

import "easymde/dist/easymde.min.css";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";
import marked from "marked";
import SimpleMDE from "react-simplemde-editor";

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

const BlogCreate: React.FC<RouteComponentProps> = (props) => {
  const [markdown, setMarkdown] = useState("");
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCreate = async (data: Inputs) => {
    await dispatch(
      createBlog({
        title: data.blogTitle,
        content: marked(markdown),
        createDate: currentDate,
      })
    );
    reset();
    await dispatch(fetchBlogs());
    props.history.push("/");
  };

  return (
    <div className={scss.root}>
      <form className={scss.form} onSubmit={handleSubmit(handleCreate)}>
        <div className={scss.title_wrapper}>
          <input
            type="text"
            placeholder="タイトル"
            {...register("blogTitle", { required: true })}
          />
        </div>
        <div className={scss.mde_container}>
          <div className={scss.mde}>
            <SimpleMDE onChange={(e) => setMarkdown(e)} />
          </div>

          <div id="body" className={scss.preview}>
            <span
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className={scss.button}
          onClick={() => window.alert("投稿しました")}
        >
          投稿する
        </button>
      </form>
    </div>
  );
};

export default BlogCreate;
