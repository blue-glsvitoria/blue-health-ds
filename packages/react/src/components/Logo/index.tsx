import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import IconSVG from "../../assets/icon.svg";
import LogoSVG from "../../assets/logo.svg";

export type LogoProps = {
  variant?: "icon" | "standard";
};

export const Logo = ({ variant = "standard" }: LogoProps) => {
  return (
    <Link to="/" draggable={false}>
      <Box
        sx={{
          display: "flex",
          justifyCOntent: "center",
          alignItems: "center",
        }}
      >
        {variant === "standard" ? (
          <Box
            component={"img"}
            src={LogoSVG}
            alt="Logo da blue"
            sx={{ height: 38, width: 112 }}
            draggable={false}
          />
        ) : (
          <Box
            component={"img"}
            src={IconSVG}
            alt="Ícone da blue"
            sx={{ height: 38, width: 33 }}
            draggable={false}
          />
        )}
      </Box>
    </Link>
  );
};
