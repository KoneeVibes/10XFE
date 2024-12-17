import { Box, Card, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { EventsWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { latestEvents } from "../../config/static";
import { Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { container, item } from "../../config/verticalSlideIn";

export const Events = () => {
    const matches = useMediaQuery('(max-width:475px)');
    return (
        <EventsWrapper
            id="events"
        >
            <Box
                marginLeft={"auto"}
                marginRight={"auto"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                width={{ miniTablet: "80%", tablet: "70%", deskptop: "50%" }}
            >
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
                >
                    Upcoming Events
                </Typography>
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
                    marginBlock={{ mobile: "calc(var(--basic-margin)/2)" }}
                >
                    We are volunteers who give our time, skills, and resources towards the course of improving the quality of life
                </Typography>
                <Stack
                    overflow={"hidden"}
                    alignItems={matches ? "stretch" : "center"}
                    justifyContent={"center"}
                    component={motion.div}
                    variants={item}
                >
                    <BaseButton
                        radius="40px"
                        sx={{
                            width: matches ? "auto" : "fit-content"
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
                            Join community
                        </Typography>
                    </BaseButton>
                </Stack>
            </Box>
            <Grid2
                container
                spacing={2}
                overflow={"hidden"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                marginBlockStart={"var(--basic-margin)"}
            >
                {latestEvents.map((event, index) => {
                    return (
                        <Grid2
                            key={index}
                            component={motion.div}
                            variants={item}

                            size={{ mobile: 12, miniTablet: 6, laptop: 3 }}
                        >
                            <Card
                                className="event-card"
                            >
                                <Fragment>
                                    {event.thumbnail}
                                </Fragment>
                            </Card>
                        </Grid2>
                    )
                })}
            </Grid2>
        </EventsWrapper>
    )
}