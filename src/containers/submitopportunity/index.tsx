import { Box, Typography } from "@mui/material";
import { SubmitOpportunityWrapper } from "./styled";
import { BaseButton } from "../../components/button/styled";
import { SubmitOpportunityThumbnail } from "../../assets";
import { motion } from "framer-motion";
import { leftChild, leftParent, rightParent } from "../../config/horizontalSlideIn";

export const SubmitOpportunity = ({ className }: { className?: string }) => {
    const submitOpportunityFormUrl = "https://form.jotform.com/jsform/243052212247546";
    return (
        <SubmitOpportunityWrapper
            className={className}
        >
            <Box
                component={motion.div}
                variants={leftParent}
                initial={"hidden"}
                whileInView={"show"}
                className="text-box"
            >
                <Typography
                    variant="h2"
                    component={motion.h2}
                    variants={leftChild}
                    fontFamily={"ES Rebond Grotesque"}
                    fontWeight={700}
                    fontSize={{ mobile: 32, tablet: 40, laptop: 48, desktop: 60, xl: 74 }}
                    lineHeight={"normal"}
                    color="#000000"
                    whiteSpace={"normal"}
                >
                    Submit opportunities that would make a difference
                </Typography>
                <Typography
                    variant="subtitle1"
                    component={motion.h6}
                    variants={leftChild}
                    fontFamily={"Suisse Neue"}
                    fontWeight={400}
                    fontSize={{ mobile: 15, laptop: 18, xl: 22 }}
                    lineHeight={"normal"}
                    color="#000000"
                    whiteSpace={"normal"}
                    marginBlock={{ mobile: "calc(var(--basic-margin)/2)" }}
                >
                    We are volunteers who give our time, skills, and resources towards the course of improving the quality of life
                </Typography>
                <Box
                    component={motion.div}
                    variants={leftChild}
                >
                    <BaseButton
                        sx={{
                            width: { mobile: "-webkit-fill-available", miniTablet: "auto" }
                        }}
                        onClick={() => window.open(submitOpportunityFormUrl, '_blank')}
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
                            Submit Opportunity
                        </Typography>
                    </BaseButton>
                </Box>
            </Box>
            <Box
                className="thumbnail-box"
                component={motion.div}
                variants={rightParent}
                initial="hidden"
                whileInView="show"
            >
                <SubmitOpportunityThumbnail />
            </Box>
        </SubmitOpportunityWrapper>
    )
}