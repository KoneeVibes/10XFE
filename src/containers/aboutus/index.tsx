import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { AboutUsWrapper } from "./styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { about } from "../../config/static";
import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { container, item } from "../../config/verticalSlideIn";

export const AboutUs = () => {
    const matches = useMediaQuery('(min-width:1024px)');
    return (
        <AboutUsWrapper
            id="about"
        >
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className={"about-us-header"}
                marginLeft={"auto"}
                marginRight={"auto"}
                width={{ miniTablet: "70%" }}
            >
                <Typography
                    variant="subtitle1"
                    component={motion.h6}
                    variants={item}
                    fontFamily={"Suisse Neue"}
                    fontWeight={400}
                    fontSize={{ mobile: 15 }}
                    lineHeight={"normal"}
                    color="#000000"
                    textAlign={"center"}
                    whiteSpace={"normal"}
                >
                    Why 10X Community
                </Typography>
                <Typography
                    variant="h2"
                    component={motion.h2}
                    variants={item}
                    fontFamily={"ES Rebond Grotesque"}
                    fontWeight={600}
                    fontSize={{ mobile: 18, miniTablet: 24, laptop: 32, desktop: 44 }}
                    lineHeight={"normal"}
                    color="#000000"
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    marginBlockStart={"calc(var(--basic-margin)/4)"}
                    marginBlockEnd={{ mobile: "var(--basic-margin)", laptop: "calc(var(--basic-margin) * 2)" }}
                >
                    A community of people driving the improvement of the quality of life
                </Typography>
            </Box>
            <Box>
                <Carousel
                    autoPlay={true}
                    autoFocus={true}
                    infiniteLoop={true}
                    interval={2000}
                    emulateTouch={true}
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    stopOnHover={false}
                    centerMode={true}
                    centerSlidePercentage={matches ? 40 : 80}
                >
                    {about.map((entry, index) => {
                        return (
                            <Card
                                key={index}
                                className="about-card"
                                sx={{
                                    background: entry.bgColor,
                                }}
                            >
                                <Fragment>
                                    {entry.icon}
                                </Fragment>
                                <Typography
                                    variant="h3"
                                    fontFamily={"ES Rebond Grotesque"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 24, laptop: 32, desktop: 44, xl: 55 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="#434343"
                                    textAlign={"left"}
                                    marginBlock={"1rem"}
                                    sx={{
                                        userSelect: "none",
                                        width: { laptop: "70%" },
                                    }}
                                >
                                    {entry.title}
                                </Typography>
                                <Fragment>
                                    {entry.thumbnail}
                                </Fragment>
                            </Card>
                        )
                    })}
                </Carousel>
            </Box>
        </AboutUsWrapper>
    )
}