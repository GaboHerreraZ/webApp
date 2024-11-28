import { Button } from "@mui/material";

interface Props {
  label: string;
  handleClick: () => void;
}

export const CustomButton = (props: Props) => {
  return (
    <Button variant="contained" color="primary" onClick={props.handleClick}>
      {props.label}
    </Button>
  );
};
