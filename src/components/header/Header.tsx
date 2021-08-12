import React from "react";
import scss from "./Header.module.scss";
import { AppDispatch } from "../../app/store";
import { auth } from "../../firebase";
import { deleteUserData, selectUserData } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const userData = useSelector(selectUserData);
  const userEmail = userData.email;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      await dispatch(deleteUserData());
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
        {userEmail === "guest@example.com" ? null : (
          <div className={scss.createPost_signOut_wrapper}>
            <p className={scss.createPost}>
              <Link to="/create">新規投稿</Link>
            </p>
            <p onClick={handleSignOut} className={scss.signOut}>
              ログアウト
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
