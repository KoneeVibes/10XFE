import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const EventsWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        background: "#F6F6F6",
        padding: "var(--basic-padding)",
        overflow: "hidden",
        "& .event-card": {
            border: "none",
            flex: 1,
            background: "transparent",
            boxShadow: "none",
            "& svg": {
                width: "100%",
                height: "auto",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2) calc(var(--basic-padding) * 2)",
        },
    }
})