import React, { useState } from "react";
import scss from "./BlogEdit.module.scss";
import { editBlog, selectSelectedBlog } from "../blogSlice";
import { fetchBlogs } from "../../blog/blogSlice";
import { RouteComponentProps } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useForm } from "react-hook-form";
// highlight.js
import marked from "marked";
import "easymde/dist/easymde.min.css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import SimpleMDE from "react-simplemde-editor";

type Inputs = {
  blogTitle: string;
  blogContent: string;
  updateDate: string;
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

const BlogEdit: React.FC<RouteComponentProps> = (props) => {
  const [markdown, setMarkdown] = useState("");
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();
  const selectedBlogData = useAppSelector(selectSelectedBlog);
  // const userData = useAppSelector(selectUserData);

  const handleEdit = async (data: Inputs) => {
    await dispatch(
      editBlog({
        id: selectedBlogData.id,
        title: data.blogTitle,
        content: marked(markdown),
        updateDate: currentDate,
        createDate: selectedBlogData.createDate,
        likes: selectedBlogData.likes,
        completed: selectedBlogData.completed,
      })
    );
    reset();
    await dispatch(fetchBlogs());
    alert("編集しました。");
    props.history.push("/");
  };

  console.log(selectedBlogData.content);
  return (
    <div className={scss.root}>
      <form className={scss.form} onSubmit={handleSubmit(handleEdit)}>
        <div className={scss.title_wrapper}>
          <input
            type="text"
            defaultValue={selectedBlogData.title}
            placeholder="タイトル"
            {...register("blogTitle", { required: true })}
          />
        </div>
        <div className={scss.mde_container}>
          <div className={scss.mde}>
            <SimpleMDE
              value={marked(selectedBlogData.content)}
              onChange={(e) => setMarkdown(e)}
            />
          </div>

          <div id="body" className={scss.preview}>
            <span
              dangerouslySetInnerHTML={{
                __html: marked(markdown),
              }}
            />
          </div>
        </div>
        <button type="submit" className={scss.button}>
          編集する
        </button>
      </form>
    </div>
  );
};

export default BlogEdit;
