import React from "react";
import scss from "./Header.module.scss";
import { auth } from "../../firebase";
import { signOutUser, selectUserData } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const userData = useAppSelector(selectUserData);
  const userEmail = userData.email;

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      await dispatch(signOutUser());
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
          {userEmail === "guest@example.com" ? null : (
            <p className={scss.createPost}>
              <Link to="/create">新規投稿</Link>
            </p>
          )}
          <p onClick={handleSignOut} className={scss.signOut}>
            ログアウト
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
