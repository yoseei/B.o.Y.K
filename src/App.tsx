import React, { useEffect } from "react";
import scss from "./App.module.scss";
import { auth } from "./firebase";
import BlogCreate from "./features/blog/blogCreate/BlogCreate";
import BlogDetail from "./features/blog/blogDetail/BlogDetail";
import BlogEdit from "./features/blog/blogEdit/BlogEdit";
import BlogList from "./features/blog/blogList/BlogList";
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import Header from "./components/header/Header";
import { fetchBlogs } from "./features/blog/blogSlice";
import { fetchUser } from "./features/user/userSlice";
import Footer from "./components/footer/Footer";
import SignIn from "./features/user/userSignIn/UserSignIn";
import { useAppDispatch } from "./app/hooks";

const App: React.FC<RouteComponentProps> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      !user && props.history.push("/signin");
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchBlogs());
      await dispatch(fetchUser());
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
            <Route exact path="/create" component={BlogCreate} />
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
