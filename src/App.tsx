import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { fetchBlogs } from "./features/blog/blogSlice";
import { Counter } from "./features/counter/Counter";
import Header from "./components/header/Header";
import scss from "./App.module.scss";
import Footer from "./components/footer/Footer";
import BlogForm from "./features/blog/blogForm/BlogForm";
import PostsDetail from "./components/main/PostsDetail";
import BlogEdit from "./features/blog/blogEdit/BlogEdit";
import DeleteModal from "./components/UIKit/DeleteModal";
import BlogList from "./features/blog/blogList/BlogList";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      dispatch(fetchBlogs());
    };
    getData();
  }, []);

  return (
    <div className={scss.root}>
      <BrowserRouter>
        <Header />
        <div className={scss.main}>
          <Switch>
            <Route exact path="/create" component={BlogForm} />
            <Route exact path="/edit" component={BlogEdit} />
            <Route exact path="/detail/:id" component={PostsDetail} />
            <Route exact path="/list" component={BlogList} />

            {/* <DeleteModal /> */}
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
