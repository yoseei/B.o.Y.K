import React from "react";
import { Counter } from "./features/counter/Counter";
import Header from "./components/header/Header";
import scss from "./App.module.scss";
import Footer from "./components/footer/Footer";
import BlogForm from "./features/blog/blogForm/BlogForm";
import PostsList from "./components/main/PostsList";
import PostsDetail from "./components/main/PostsDetail";
import PostsCreate from "./components/main/PostsCreate";
import PostsEdit from "./components/main/PostsEdit";
import DeleteModal from "./components/UIKit/DeleteModal";
import BlogList from "./features/blog/blogList/BlogList";
function App() {
  return (
    <div className={scss.root}>
      <Header />
      <div className={scss.main}>
        {/* <BlogForm /> */}
        <BlogList />
        {/* <PostsList /> */}
        {/* <PostsDetail /> */}
        {/* <PostsCreate /> */}
        {/* <PostsEdit /> */}
        {/* <DeleteModal /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
