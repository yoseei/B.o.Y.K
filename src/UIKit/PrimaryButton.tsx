import React from "react";
import scss from "./PrimaryButton.module.scss";
import Button from "@material-ui/core/Button";

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const PrimaryButton = (props: Props) => {
  return (
    <div className={scss.root}>
      <Button variant="contained" onClick={props.onClick}>
        {props.text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
