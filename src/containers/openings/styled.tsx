import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const OpeningsWrapper = styled(Box)(({ theme }) => {
    const { openMenu, headerTextHeight } = useContext(Context);
    return {
        position: "absolute",
        // 124.8px is the height of the navitems when openmenu is true
        top: openMenu ? `calc(var(--mobile-nav-height) + (var(--basic-padding) * 2.5) + ${headerTextHeight}px + 124.8px)` : `calc(${headerTextHeight}px + calc(var(--basic-padding) * 6))`,
        boxShadow: "0px 1px 3px 0px #0000001A",
        borderRadius: "12px",
        left: "var(--basic-margin)",
        right: "var(--basic-margin)",
        background: "#FFFFFF",
        overflow: "hidden",
        "& .opportunity-card": {
            padding: "calc(var(--basic-padding)/4) var(--basic-padding)",
            border: "1px solid #E5E7EB",
            boxShadow: "none",
            borderRadius: "12px",
        },
        [theme.breakpoints.up("tablet")]: {
            left: "calc(var(--basic-margin) * 2)",
            right: "calc(var(--basic-margin) * 2)",
        },
    }
})