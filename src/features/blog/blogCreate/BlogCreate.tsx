import React, { useState } from "react";
import scss from "./BlogCreate.module.scss";
import { AppDispatch } from "../../../app/store";
import { createBlog } from "../blogSlice";
import "easymde/dist/easymde.min.css";
import { fetchBlogs } from "../blogSlice";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";
import marked from "marked";
import { RouteComponentProps } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
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

const BlogCreate: React.FC<RouteComponentProps> = (props) => {
  const [markdown, setMarkdown] = useState("");
  const dispatch: AppDispatch = useDispatch();
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
      <form
        // action=""
        className={scss.form}
        onSubmit={handleSubmit(handleCreate)}
      >
        <div className={scss.title_wrapper}>
          <input
            type="text"
            // defaultValue=""
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
