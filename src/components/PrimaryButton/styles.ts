import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)<{ width?: string }>(({ width = "100%", disabled }) => ({
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  cursor: "pointer",
  width,
  backgroundColor: disabled ? "#0000001f" : "#2563eb",
  color: "#fff",
  border: "none",
  textTransform: "none",
  textWrap: "nowrap",
  lineHeight: "20px",
  "&:hover": {
    backgroundColor: "#1453db",
  },
}));
