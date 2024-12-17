import { Box, Card, Chip, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { OpportunitiesWrapper } from "./styled";
import { latestOpportunities } from "../../config/static";
import { Fragment } from "react/jsx-runtime";
import { ActiveIcon, LinkIcon } from "../../assets";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { BaseButton } from "../../components/button/styled";
import { motion } from "framer-motion";
import { container, item } from "../../config/verticalSlideIn";
import { useNavigate } from "react-router-dom";

export const Opportunities = () => {
    const smallerScreen = useMediaQuery('(max-width: 202px)')
    const matches = useMediaQuery('(max-width:475px)');

    const navigate = useNavigate();

    const handleNavigateToOpportunities = () => {
        return navigate("/opportunities");
    }
    return (
        <OpportunitiesWrapper>
            <Box
                marginLeft={"auto"}
                marginRight={"auto"}
                overflow={"hidden"}
                width={{ miniTablet: "70%" }}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    component={motion.div}
                    variants={item}
                    sx={{
                        padding: "calc(var(--basic-padding)/4) calc(var(--basic-padding)/2)",
                        backgroundColor: "#FFE746",
                        width: smallerScreen ? "auto" : "fit-content",
                        borderRadius: "2px",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Suisse Neue"}
                        fontWeight={400}
                        fontSize={{ mobile: 15 }}
                        lineHeight={"normal"}
                        color="#000000"
                        textAlign={"center"}
                        whiteSpace={"normal"}
                    >
                        Access opportunities
                    </Typography>
                </Box>
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
                    Access opportunities from our community & partners
                </Typography>
            </Box>
            <Grid2
                container
                spacing={2}
                overflow={"hidden"}
            >
                {latestOpportunities.map((opportunity, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 12, laptop: 6 }}
                        >
                            <Card
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
                                        component={motion.div}
                                        variants={item}
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
                        </Grid2>
                    )
                })}
            </Grid2>
            <Stack
                overflow={"hidden"}
                alignItems={matches ? "stretch" : "center"}
                justifyContent={"center"}
                marginTop={"var(--basic-margin)"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <BaseButton
                    sx={{
                        width: matches ? "auto" : "fit-content"
                    }}
                    component={motion.button}
                    variants={item}
                    onClick={handleNavigateToOpportunities}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"20px"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        See More Opportunities
                    </Typography>
                </BaseButton>
            </Stack>
        </OpportunitiesWrapper >
    )
}
