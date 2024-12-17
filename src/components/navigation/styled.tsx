import { Stack, styled } from "@mui/material";
import { useContext, useEffect } from "react";
import { Context } from "../../context";

export const NavigationWrapper = styled(Stack)(({ theme }) => {
    const { openMenu, setOpenMenu } = useContext(Context);
    useEffect(() => {
        const handleResize = () => {
            setOpenMenu(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setOpenMenu]);
    return {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "var(--basic-padding)",
        gap: "var(--flex-gap)",
        "& .favicon-box": {
            "& svg": {
                width: "100%",
                height: "auto",
                cursor: "pointer",
            }
        },
        "& .hamburger": {
            overflow: "hidden",
        },
        "& .nav-links": {
            display: openMenu ? "flex" : "none",
            gap: "calc(var(--flex-gap)/2)",
            position: "absolute",
            top: "6.5625rem",
            left: 0,
            right: 0,
            padding: "0 var(--basic-padding)",
        },
        "& .join-community-button-box": {
            display: "none",
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) calc(var(--basic-padding) * 2)",
            "& .nav-links": {
                padding: "0 calc(var(--basic-padding) * 2)",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            gap: "calc(var(--flex-gap) * 2)",
            "& .nav-links": {
                display: "flex",
                flexDirection: "row",
                position: "static",
                padding: "0",
            },
            "& .hamburger": {
                display: "none",
            },
            "& .join-community-button-box": {
                display: "block",
                "& button": {
                    width: "100%",
                }
            }
        },
        [theme.breakpoints.up("desktop")]: {
            "& .nav-links": {
                gap: "calc(var(--flex-gap))",
            }
        }
    }
})