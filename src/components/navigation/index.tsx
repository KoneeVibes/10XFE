import { HashLink } from "react-router-hash-link";
import { Box, Stack, Typography } from "@mui/material";
import { NavigationWrapper } from "./styled";
import { Logo } from "../../assets";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../config/static";
import { BaseButton } from "../button/styled";
import { MenuButton } from "../button/menu";

export const Navigation = () => {
    const navigate = useNavigate();
    const joinCommunityFormUrl = "https://form.jotform.com/242425020766350";

    const handleLogoClick = () => {
        navigate("/");
    };
    return (
        <NavigationWrapper>
            <Box
                component={"div"}
                className="favicon-box"
            >
                <Logo
                    onClick={handleLogoClick}
                />
            </Box>
            <Stack
                className="nav-links"
            >
                {navLinks.map((navLink, index) => {
                    return (
                        <HashLink
                            key={index}
                            to={navLink.url}
                            smooth={true}
                        >
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Roboto"}
                                fontWeight={500}
                                fontSize={16}
                                lineHeight={"normal"}
                                color="#000000"
                                sx={{
                                    cursor: "pointer",
                                }}
                            >
                                {navLink.name}
                            </Typography>
                        </HashLink>
                    )
                })}
            </Stack>
            <Box
                component={"div"}
                className="join-community-button-box"
            >
                <BaseButton
                    onClick={() => window.open(joinCommunityFormUrl, '_blank')}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"Roboto"}
                        fontWeight={"inherit"}
                        fontSize={"16px"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Join Community
                    </Typography>
                </BaseButton>
            </Box>
            <Box
                component={"div"}
                className="hamburger"
            >
                <MenuButton />
            </Box>
        </NavigationWrapper>
    )
}