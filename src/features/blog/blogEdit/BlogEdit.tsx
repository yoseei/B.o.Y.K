import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import scss from "./BlogEdit.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { editBlog } from "../blogSlice";
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
  // const postsData = useSelector(selectPosts);

  const handleCreate = async (data: Inputs) => {
    dispatch(
      editBlog({
        title: data.blogTitle,
        content: data.blogContent,
        updateDate: currentDate,
      })
    );
    reset();
    dispatch(fetchBlogs());
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
            onClick={() => window.alert("編集しました")}
          >
            編集する
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;

// import React from "react";
// import scss from "./BlogEdit.module.scss";

// const PostsEdit = () => {
//   return (
//     <div className={scss.root}>
//       <div className={scss.title_wrapper}>
//         <p>タイトル</p>
//         <input></input>
//       </div>
//       <div className={scss.contents_preview_container}>
//         <div className={scss.contents_wrapper}>
//           <p>入力欄</p>
//           <textarea></textarea>
//         </div>
//         <div className={scss.preview_wrapper}>
//           <p>プレビュー</p>
//           <div className={scss.preview_area}></div>
//         </div>
//       </div>
//       <div className={scss.button_wrapper}>
//         {/* <PrimaryButton
//           text={"編集する"}
//           onClick={() => console.log("click!")}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default PostsEdit;
