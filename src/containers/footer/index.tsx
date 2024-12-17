import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FooterWrapper } from "./styled";
import { Logo } from "../../assets";
import { useNavigate } from "react-router-dom";
import { BaseInput } from "../../components/input/styled";
import { BaseButton } from "../../components/button/styled";
import { Link } from "react-router-dom";
import { socialMediaIcons } from "../../config/static";
import { motion } from "framer-motion";
import { leftParent, rightChild, rightParent } from "../../config/horizontalSlideIn";

export const Footer = ({ className }: { className?: string }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleSubmit = () => {

    }

    return (
        <FooterWrapper
            id="contact"
            className={className}
        >
            <Stack
                gap={"var(--flex-gap)"}
                direction={{ laptop: "row" }}
                overflow={"hidden"}
            >
                <Box
                    flex={1}
                    overflow={"hidden"}
                    component={motion.div}
                    variants={leftParent}
                    initial={"hidden"}
                    whileInView={"show"}
                >
                    <Logo
                        onClick={handleLogoClick}
                    />
                </Box>
                <Box
                    flex={1}
                    overflow={"hidden"}
                >
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={rightParent}
                        initial={"hidden"}
                        whileInView={"show"}
                    >
                        <Typography
                            component={motion.label}
                            variants={rightChild}
                            fontFamily={"ES Rebond Grotesque"}
                            fontWeight={500}
                            fontSize={{ mobile: 18, laptop: 24, desktop: 30 }}
                            lineHeight={"normal"}
                            color="#000000"
                            whiteSpace={"normal"}
                            marginBlockEnd={"var(--basic-margin)"}
                        >
                            Sign up to our newsletter
                        </Typography>
                        <Stack
                            direction={"row"}
                            component={motion.div}
                            variants={rightChild}
                            justifyContent={"space-between"}
                            borderBottom={"2px solid #898989"}
                        >
                            <BaseInput
                                placeholder="Email"
                            />
                            <Box
                                overflow={"hidden"}
                            >
                                <BaseButton
                                    sx={{
                                        width: { mobile: "-webkit-fill-available", miniTablet: "auto" }
                                    }}
                                >
                                    <Typography
                                        variant={"button"}
                                        fontFamily={"inherit"}
                                        fontWeight={"inherit"}
                                        fontSize={"inherit"}
                                        lineHeight={"inherit"}
                                        color={"inherit"}
                                        textTransform={"inherit"}
                                    >
                                        Subscribe
                                    </Typography>
                                </BaseButton>
                            </Box>
                        </Stack>
                    </motion.form>
                </Box>
            </Stack>
            <Stack
                gap={"var(--flex-gap)"}
                component={motion.div}
                variants={rightParent}
                initial={"hidden"}
                whileInView={"show"}
                direction={{ mobile: "column-reverse", laptop: "row" }}
                justifyContent={"space-between"}
                borderBottom={"2px solid #898989"}
                padding={{ mobile: "var(--basic-padding) 0", tablet: "calc(var(--basic-padding) * 3) 0 var(--basic-padding)" }}
            >
                <Stack
                    direction={"row"}
                    overflow={"hidden"}
                    component={motion.div}
                    variants={rightChild}
                    gap={"calc(var(--flex-gap)/2)"}
                >
                    <Link
                        to={""}
                    >
                        <Typography
                            variant={"subtitle1"}
                            fontFamily={"Roboto"}
                            fontWeight={"400"}
                            fontSize={{ mobile: 16, laptop: 20 }}
                            lineHeight={"normal"}
                            color={"#000000"}
                        >
                            Terms of Use
                        </Typography>
                    </Link>
                    <Link
                        to={""}
                    >
                        <Typography
                            variant={"subtitle1"}
                            fontFamily={"Roboto"}
                            fontWeight={"400"}
                            fontSize={{ mobile: 16, laptop: 20 }}
                            lineHeight={"normal"}
                            color={"#000000"}
                        >
                            Privacy Policy
                        </Typography>
                    </Link>
                </Stack>
                <Stack
                    direction={"row"}
                    overflow={"hidden"}
                    component={motion.div}
                    variants={rightChild}
                    gap={"calc(var(--flex-gap)/4)"}
                >
                    {socialMediaIcons.map((socialMedia, index) => {
                        return (
                            <IconButton
                                key={index}
                                sx={{
                                    color: "#FFFFFF",
                                    background: "#000000",
                                    "&:hover": {
                                        color: "#FFFFFF",
                                        background: "#000000",
                                    }
                                }}
                            >
                                {socialMedia.icon}
                            </IconButton>
                        )
                    })}
                </Stack>
            </Stack>
        </FooterWrapper>
    )
}