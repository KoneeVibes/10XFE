import { Container, styled } from "@mui/material";
import { Context } from "../../context";
import { useContext } from "react";

export const OpportunitiesWrapper = styled(Container)(() => {
    const { openMenu, headerTextHeight, openingsComponentHeight } = useContext(Context);
    return {
        position: "relative",
        overflowX: "hidden",
        "& .opportunities-submit-opportunity": {
            // 124.8px is the height of the navitems when openmenu is true
            top: openMenu
                ? `calc(${(openingsComponentHeight ?? 0) + (headerTextHeight ?? 0)}px - var(--opportunities-hero-height) + var(--basic-margin) + 124.8px)`
                : `calc(${(openingsComponentHeight ?? 0) + (headerTextHeight ?? 0)}px - var(--opportunities-hero-height) + var(--basic-margin))`,
        },
        "& .opportunities-footer": {
            // 124.8px is the height of the navitems when openmenu is true
            top: openMenu
                ? `calc(${(openingsComponentHeight ?? 0) + (headerTextHeight ?? 0)}px - var(--opportunities-hero-height) + var(--basic-margin) + 124.8px)`
                : `calc(${(openingsComponentHeight ?? 0) + (headerTextHeight ?? 0)}px - var(--opportunities-hero-height) + var(--basic-margin))`,
        },
    }
})