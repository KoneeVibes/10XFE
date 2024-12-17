import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const TestimonialWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(1 * var(--basic-margin))",
        padding: "0 var(--basic-padding)",
        overflow: "hidden",
        "& .rfm-marquee": {
            alignItems: "center",
        },
        "& .rfm-child": {
            marginLeft: "2rem",
        },
        [theme.breakpoints.up("tablet")]: {
            marginBlock: "calc(2 * var(--basic-margin))",
            padding: "0 calc(var(--basic-padding) * 2)",
        },
    }
})