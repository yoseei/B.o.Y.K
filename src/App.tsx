import React from "react";
import { Counter } from "./features/counter/Counter";
import Header from "./components/header/Header";
import scss from "./App.module.scss";
import Footer from "./components/footer/Footer";
import BlogForm from "./features/blog/blogForm/BlogForm";
import PostsDetail from "./components/main/PostsDetail";
import PostsEdit from "./components/main/PostsEdit";
import DeleteModal from "./components/UIKit/DeleteModal";
import BlogList from "./features/blog/blogList/BlogList";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className={scss.root}>
      <BrowserRouter>
        <Header />
        <div className={scss.main}>
          <Switch>
            <Route exact path="/create" component={BlogForm} />
            <Route exact path="/edit" component={PostsEdit} />
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
