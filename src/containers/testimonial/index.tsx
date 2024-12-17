import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { TestimonialWrapper } from "./styled";
import { brands } from "../../config/static";
import { Fragment } from "react/jsx-runtime";
import Marquee from "react-fast-marquee";
import { container, item } from "../../config/verticalSlideIn";

export const Testimonial = () => {
    return (
        <TestimonialWrapper>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    variant="h2"
                    component={motion.h2}
                    variants={item}
                    fontFamily={"ES Rebond Grotesque"}
                    fontWeight={500}
                    fontSize={{ mobile: 18, miniTablet: 24, laptop: 32, desktop: 44 }}
                    lineHeight={"normal"}
                    color="#000000"
                    textAlign={"center"}
                    whiteSpace={"normal"}
                    marginBlockEnd={"calc(var(--basic-margin)/4)"}
                >
                    Trusted by hundreds of organizations
                </Typography>
            </Box>
            <Box>
                <Marquee
                    autoFill={true}
                >
                    {brands.map((brand, index) => {
                        return (
                            <Fragment key={index}>
                                {brand.icon}
                            </Fragment>
                        )
                    })}
                </Marquee>
            </Box>
        </TestimonialWrapper>
    )
}