import { InputAdornment, type TextFieldProps } from "@mui/material";
import * as S from "./styles";
import type { ReactNode } from "react";

type Props = TextFieldProps & {
  icon?: ReactNode;
};

const InputComponent = (props: Props) => {
  const { label, icon, ...params } = props;

  return (
    <S.StyledWrapper className={props.className}>
      {label && <S.Label>{label}</S.Label>}

      <S.StyledTextField
        slotProps={{
          ...(icon && {
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ paddingLeft: 1 }}>
                  {icon}
                </InputAdornment>
              ),
            },
          }),
        }}
        hasIcon={!!icon}
        {...params}
      />
    </S.StyledWrapper>
  );
};

export default InputComponent;
