import { auth } from "../../../firebase";
import { AppDispatch } from "../../../app/store";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { RouteComponentProps } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { fetchUser, signInUser } from "../userSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type UserDataTypes = {
  email: string;
  password: string;
};

//------  UserSignIn ---------//
const UserSignIn: React.FC<RouteComponentProps> = (props) => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataTypes>();

  // 管理者ログイン処理
  const handleAdminSignIn = async (data: UserDataTypes) => {
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      await dispatch(signInUser({ email: email, password: password }));
      await dispatch(fetchUser());
      props.history.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const guest = async (email: string, password: string) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  const handleGuestSignIn = async () => {
    return await guest("guest@example.com", "password")
      .then(async () => {
        await dispatch(
          signInUser({ email: "guest@example.com", password: "password" })
        );
        await dispatch(fetchUser());
        props.history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleAdminSignIn)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            autoComplete="email"
            autoFocus
            error={Boolean(errors.email)}
            helperText={errors.email && errors.email.message}
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            管理者としてログインする
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleGuestSignIn}
          >
            ゲストとしてログインする
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default UserSignIn;
