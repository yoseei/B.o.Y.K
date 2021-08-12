import React, { useEffect } from "react";
import { AppDispatch } from "./app/store";
import { auth } from "./firebase";
import BlogForm from "./features/blog/blogForm/BlogForm";
import BlogDetail from "./features/blog/blogDetail/BlogDetail";
import BlogEdit from "./features/blog/blogEdit/BlogEdit";
import BlogList from "./features/blog/blogList/BlogList";
import { fetchBlogs } from "./features/blog/blogSlice";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import scss from "./App.module.scss";
import SignIn from "./features/user/userSignIn/UserSignIn";
import {
  Switch,
  Route,
  BrowserRouter,
  RouteComponentProps,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/user/userSlice";

const App: React.FC<RouteComponentProps> = (props) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchBlogs());
      await dispatch(fetchUser());
    };
    getData();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      !user && props.history.push("/signin");
    });
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
            <Route exact path="/" component={BlogList} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
