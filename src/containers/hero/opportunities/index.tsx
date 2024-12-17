import { Box, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../../context";
import { motion } from "framer-motion";
import { container, item } from "../../../config/verticalSlideIn";

export const Hero = () => {
    const typographyRef = useRef<HTMLDivElement>(null);
    const { setHeaderTextHeight } = useContext(Context);

    useEffect(() => {
        if (typographyRef.current) {
            setHeaderTextHeight(typographyRef.current.offsetHeight);
        }
        const handleResize = () => {
            if (typographyRef.current) {
                setHeaderTextHeight(typographyRef.current.offsetHeight);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setHeaderTextHeight]);

    return (
        <HeroWrapper>
            <Box
                width={{ laptop: "80%", desktop: "70%" }}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    ref={typographyRef}
                    variant="h1"
                    component={motion.h1}
                    variants={item}
                    fontFamily={"ES Rebond Grotesque"}
                    fontWeight={600}
                    fontSize={{ mobile: 28, miniTablet: 32, tablet: 40, desktop: 48, xl: 60 }}
                    lineHeight={"normal"}
                    color="#FFFFFF"
                    whiteSpace={"normal"}
                >
                    Access opportunities from our community & Partner
                </Typography>
            </Box>
        </HeroWrapper>
    )
}
