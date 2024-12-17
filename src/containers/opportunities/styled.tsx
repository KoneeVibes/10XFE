import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const OpportunitiesWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        marginBlock: "calc(2 * var(--basic-margin))",
        padding: "0 var(--basic-padding)",
        "& .opportunity-card": {
            padding: "calc(var(--basic-padding)/4) var(--basic-padding)",
            border: "1px solid #E5E7EB",
            boxShadow: "none",
            borderRadius: "12px",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "0 calc(var(--basic-padding) * 2)",
        },
    }
})