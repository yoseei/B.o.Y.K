import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { fetchBlogs } from "./features/blog/blogSlice";
import { Counter } from "./features/counter/Counter";
import Header from "./components/header/Header";
import scss from "./App.module.scss";
import Footer from "./components/footer/Footer";
import BlogForm from "./features/blog/blogForm/BlogForm";
import BlogDetail from "./features/blog/blogDetail/BlogDetail";
import BlogEdit from "./features/blog/blogEdit/BlogEdit";
import BlogList from "./features/blog/blogList/BlogList";
import SignIn from "./features/user/userSignIn/UserSignIn";
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
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/create" component={BlogForm} />
            <Route path="/edit/:id" component={BlogEdit} />
            <Route path="/detail/:id" component={BlogDetail} />
            <Route exact path="/list" component={BlogList} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
