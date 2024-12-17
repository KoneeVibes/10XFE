import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const FooterWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        padding: "var(--basic-padding)",
        overflow: "hidden",
        "& form": {
            display: "flex",
            flexDirection: "column",
            "& .MuiInputBase-root": {
                paddingLeft: 0
            }
        },
        "& a": {
            textDecoration: "none",
            height: "fit-content",
            borderBottom: "2px solid #898989"
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2)",
        },
    }
})