import React from "react";
import scss from "./PrimaryButton.module.scss";
import Button from "@material-ui/core/Button";

type PropsType = {
  text: string;
  type: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const PrimaryButton: React.FC<PropsType> = ({ onClick, type, text }) => {
  return (
    <div className={scss.root}>
      {/* <Button variant="contained" onClick={onClick} type={type}>
        {text}
      </Button> */}
    </div>
  );
};

export default PrimaryButton;
