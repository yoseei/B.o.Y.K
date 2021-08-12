import React from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import scss from "./Header.module.scss";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
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
