import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const AboutUsWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(1 * var(--basic-margin))",
        overflow: "hidden",
        "& .slider": {
            gap: "var(--flex-gap)",
        },
        "& .slide": {
            flex: 1,
        },
        "& .about-card": {
            height: "100%",
            borderRadius: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "var(--basic-padding)  var(--basic-padding) 0",
            "& svg:nth-of-type(1)": {
                display: "flex",
                marginLeft: "auto"
            },
            "& svg:nth-of-type(2)": {
                overflow: "hidden",
                width: "100%",
                height: "auto",
            }
        },
        "& .about-us-header": {
            padding: "0 var(--basic-padding)",
            [theme.breakpoints.up("tablet")]: {
                padding: "0 calc(var(--basic-padding) * 2)",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            marginBlock: "calc(2 * var(--basic-margin))",
        },
    }
})