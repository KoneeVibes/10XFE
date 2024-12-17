import { useContext } from "react";
import { Stack, styled } from "@mui/material";
import { Context } from "../../context";

export const SubmitOpportunityWrapper = styled(Stack)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        background: "#FAE355",
        gap: "var(--flex-gap)",
        padding: "var(--basic-padding)",
        margin: "var(--basic-margin)",
        overflow: "hidden",
        "& .text-box": {
            flex: 0.55,
            overflow: "hidden",
        },
        "& .thumbnail-box": {
            flex: 0.45,
            overflow: "hidden",
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding) * 2)",
            margin: "calc(var(--basic-margin) * 2)",
        },
        [theme.breakpoints.up("laptop")]: {
            flexDirection: "row",
        }
    }
})