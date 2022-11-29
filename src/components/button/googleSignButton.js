import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import Typography from '@mui/material/Typography';
import { signInWithGoogle } from "../../firebase";

const ColorButton = styled(Button)(({ theme }) => ({
  maxWidth: "100%",
  fontFamily: "'Roboto', sans-serif",
  padding: "6px 12px",
  borderRadius: "5px",
  border: "thin solid #888",
  boxShadow: "1px 1px 1px grey",
  whiteSpace: "nowrap",
  overflow: "hidden",
  color: "#444",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#ffffff99",
  },
}));

export default function GoogleSignButton() {
  return (
        <ColorButton
         onClick={signInWithGoogle}
         variant="contained">
            <FcGoogle size={25} sx={{}} />
            <Typography sx={{
                verticalAlign: "middle",
                paddingLeft: "8px",
                paddingRight: "8px",
                fontSize: "14px",
                fontWeight: "bold" }}>
                    Login with Google
            </Typography>
        </ColorButton>
  );
}
