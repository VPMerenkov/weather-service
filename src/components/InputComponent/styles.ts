import { outlinedInputClasses, Stack, styled, TextField, Typography } from "@mui/material";

export const StyledTextField = styled(TextField)<{ hasIcon?: boolean }>(({ theme, error, multiline, hasIcon }) => ({
  [`& > .${outlinedInputClasses.root}`]: {
    padding: "unset",
    width: "100%",
    height: multiline ? "auto" : 40,
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",

    [`& > .${outlinedInputClasses.input}`]: {
      padding: hasIcon ? theme.spacing(2, 2, 2, 0.5) : theme.spacing(2),
      lineHeight: "23px",
      fontSize: "16px",
    },

    [`& > .${outlinedInputClasses.notchedOutline}, 
      &.Mui-focused > .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: error ? "#d32f2f" : "#26262661",
      borderWidth: "1px",
    },

    [`&:hover > .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: error ? "#d32f2f" : "#26262699",
    },
  },
}));

export const Label = styled(Typography)({
  fontSize: "16px",
});

export const StyledWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
}));
