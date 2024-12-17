import { useContext } from "react";
import { Stack, styled } from "@mui/material";
import { Context } from "../../../context";

export const HeroWrapper = styled(Stack)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        gap: "var(--flex-gap)",
        padding: openMenu ? "var(--basic-padding)" : "0 var(--basic-padding) var(--basic-padding)",
        overflow: "hidden",
        "& .header-img-box": {
            "& img": {
                width: "100%",
                height: "auto",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
        },
        [theme.breakpoints.up("laptop")]: {
            alignItems: "center",
            flexDirection: "row",
            padding: "0 0 0 calc(var(--basic-padding) * 2)",
        }
    }
})