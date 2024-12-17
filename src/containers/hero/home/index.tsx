import { Box, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import AnimatedHero from "../../../assets/header.gif";
import { BaseButton } from "../../../components/button/styled";
import { motion } from "framer-motion";
import { leftChild, leftParent, rightChild, rightParent } from "../../../config/horizontalSlideIn";

export const Hero = () => {
    const joinCommunityFormUrl = "https://form.jotform.com/242425020766350";
    return (
        <HeroWrapper>
            <Box
                flex={1}
                overflow={"hidden"}
                component={motion.div}
                variants={leftParent}
                initial={"hidden"}
                whileInView={"show"}
            >
                <Typography
                    variant="h1"
                    component={motion.h1}
                    variants={leftChild}
                    fontFamily={"ES Rebond Grotesque"}
                    fontWeight={600}
                    fontSize={{ mobile: 28, miniTablet: 32, tablet: 40, desktop: 48, xl: 60 }}
                    lineHeight={"normal"}
                    color="#000000"
                    whiteSpace={"normal"}
                >
                    Community Projects for Sustainable Development
                </Typography>
                <Typography
                    variant="subtitle1"
                    component={motion.h6}
                    variants={leftChild}
                    fontFamily={"Suisse Neue"}
                    fontWeight={400}
                    fontSize={{ mobile: 16, desktop: 24, xl: 28 }}
                    lineHeight={"normal"}
                    color="#000000"
                    marginBlock={"var(--basic-margin)"}
                    whiteSpace={"normal"}
                >
                    Curating a directory of community projects that would spur local participation and drive sustainable development
                </Typography>
                <BaseButton
                    component={motion.button}
                    variants={leftChild}
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
                flex={1}
                overflow={"hidden"}
                className="header-img-box"
                component={motion.div}
                variants={rightParent}
                initial={"hidden"}
                whileInView={"show"}
            >
                <motion.img
                    src={AnimatedHero}
                    alt="Animated Logo"
                    variants={rightChild}
                />
            </Box>
        </HeroWrapper>
    )
}