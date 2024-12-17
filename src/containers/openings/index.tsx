import { Box, Card, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import { OpeningsWrapper } from "./styled";
import { latestOpportunities } from "../../config/static";
import { Fragment } from "react/jsx-runtime";
import { ActiveIcon, LinkIcon } from "../../assets";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../context";
import { motion } from "framer-motion";
import { container, item } from "../../config/verticalSlideIn";

export const Openings = () => {
    const matches = useMediaQuery('(max-width:475px)');
    const componentRef = useRef<HTMLDivElement>(null);
    const { openingsComponentHeight, setOpeningsComponentHeight } = useContext(Context);
    useEffect(() => console.log(openingsComponentHeight), [openingsComponentHeight]);
    useEffect(() => {
        const updateHeight = () => {
            if (componentRef.current) {
                setOpeningsComponentHeight(componentRef.current.offsetHeight);
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, [setOpeningsComponentHeight]);

    return (
        <OpeningsWrapper
            ref={componentRef}
        >
            <Stack
                gap={"var(--flex-gap)"}
            >
                {latestOpportunities.map((opportunity, index) => {
                    return (
                        <Card
                            key={index}
                            className="opportunity-card"
                            component={motion.div}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                        >
                            <Stack
                                direction={{ mobile: "column-reverse", miniTablet: matches ? "column-reverse" : "row" }}
                                gap={"calc(var(--flex-gap))"}
                                padding={"calc(var(--basic-padding)/2) 0"}
                                justifyContent={"space-between"}
                                component={motion.div}
                                variants={item}
                            >
                                <Stack
                                    direction={"row"}
                                    overflow={"hidden"}
                                    gap={"calc(var(--flex-gap)/4)"}
                                >
                                    <Fragment>
                                        {opportunity.icon}
                                    </Fragment>
                                    <Box
                                        width={"-webkit-fill-available"}
                                    >
                                        <Stack
                                            direction={"row"}
                                            alignItems={"center"}
                                            gap={"calc(var(--flex-gap)/4)"}
                                        >
                                            <Typography
                                                variant="h3"
                                                fontFamily={"Roboto"}
                                                fontWeight={400}
                                                fontSize={{ mobile: 18, miniTablet: 24, laptop: 30 }}
                                                lineHeight={"normal"}
                                                color="#000000"
                                                textAlign={"left"}
                                                whiteSpace={"normal"}
                                            >
                                                {opportunity.title}
                                            </Typography>
                                            <LinkIcon />
                                        </Stack>
                                        <Typography
                                            variant="subtitle1"
                                            fontFamily={"Roboto"}
                                            fontWeight={400}
                                            fontSize={{ mobile: 14, miniTablet: 16 }}
                                            lineHeight={"normal"}
                                            color="#111827"
                                            textAlign={"left"}
                                            whiteSpace={"normal"}
                                        >
                                            {opportunity.subtitle}
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Box>
                                    <Chip
                                        label={opportunity.label}
                                        sx={{
                                            background: "#ECFDF5",
                                            color: "#047857",
                                            boxShadow: "0px 0px 0px 1px #05966933 inset"
                                        }}
                                    />
                                </Box>
                            </Stack>
                            <Box
                                border={"1px solid #F3F4F6"}
                                borderLeft={"none"}
                                borderRight={"none"}
                                padding={"calc(var(--basic-padding)/2) 0"}
                                component={motion.div}
                                variants={item}
                            >
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"calc(var(--flex-gap)/2)"}
                                >
                                    <EmailOutlinedIcon />
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Roboto"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 16, miniTablet: 18 }}
                                        lineHeight={"normal"}
                                        color="#1F2937"
                                        textAlign={"left"}
                                        whiteSpace={"normal"}
                                        marginBlock={"calc(var(--basic-margin)/4)"}
                                    >
                                        {opportunity.contact}
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    gap={"calc(var(--flex-gap)/2)"}
                                >
                                    <ErrorOutlineOutlinedIcon />
                                    <Typography
                                        variant="body1"
                                        fontFamily={"Roboto"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 16, miniTablet: 18 }}
                                        lineHeight={"normal"}
                                        color="#1F2937"
                                        textAlign={"left"}
                                        whiteSpace={"normal"}
                                        marginBlock={"calc(var(--basic-margin)/4)"}
                                    >
                                        {opportunity.body}
                                    </Typography>
                                </Stack>
                            </Box>
                            <Stack
                                direction={{ mobile: "column", miniTablet: matches ? "column" : "row" }}
                                gap={"calc(var(--flex-gap))"}
                                padding={"calc(var(--basic-padding)/2) 0"}
                                justifyContent={"space-between"}
                                component={motion.div}
                                variants={item}
                            >
                                <Stack
                                    direction={"row"}
                                    gap={"calc(var(--flex-gap)/4)"}
                                >
                                    <ActiveIcon />
                                    <Typography
                                        variant="subtitle1"
                                        fontFamily={"Roboto"}
                                        fontWeight={400}
                                        fontSize={{ mobile: 16 }}
                                        lineHeight={"normal"}
                                        color="#1F2937"
                                        textAlign={"left"}
                                        whiteSpace={"normal"}
                                    >
                                        Open to new volunteers
                                    </Typography>
                                </Stack>
                                <Stack
                                    direction={"row"}
                                    overflow={"hidden"}
                                    gap={"calc(var(--flex-gap)/4)"}
                                >
                                    {opportunity.tags.map((tag, index) => {
                                        return (
                                            <Chip
                                                key={index}
                                                label={tag}
                                                sx={{
                                                    background: "#ECFDF5",
                                                    color: "#047857",
                                                    boxShadow: "0px 0px 0px 1px #05966933 inset"
                                                }}
                                            />
                                        )
                                    })}
                                </Stack>
                            </Stack>
                        </Card>
                    )
                })}
            </Stack>
        </OpeningsWrapper>
    )
}