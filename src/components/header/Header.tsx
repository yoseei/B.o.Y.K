import React from "react";
import { auth } from "../../firebase";
// import { deleteUserData, selectUserData } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppDispatch } from "../../app/store";

const Header: React.FC = () => {
  const history = useHistory();
  const dispatch: AppDispatch = useDispatch();
  // const userData = useSelector(selectUserData);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // await dispatch(deleteUserData(userData));
      history.push("/signin");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className={scss.root}>
      <div className={scss.container}>
        <div className={scss.title_wrapper}>
          <Link to="/">
            <h1>B.o.Y.K</h1>
          </Link>
        </div>
        <div className={scss.createPost_signOut_wrapper}>
          <p className={scss.createPost}>
            <Link to="/create">新規投稿</Link>
          </p>
          <p onClick={handleSignOut} className={scss.signOut}>
            ログアウト
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
