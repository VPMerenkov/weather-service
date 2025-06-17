import type { ButtonProps } from "@mui/material";
import * as S from "./styles";

interface Props extends ButtonProps {
  width?: string;
}

const PrimaryButton = (props: Props) => {
  return <S.StyledButton {...props} />;
};

export default PrimaryButton;
