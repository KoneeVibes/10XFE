import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../context";

export const HeroWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        background: "#722F49",
        padding: "var(--basic-padding)",
        marginTop: openMenu ? "var(--basic-padding)" : "0",
        minHeight: `var(--opportunities-hero-height)`,
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
        },
    }
})