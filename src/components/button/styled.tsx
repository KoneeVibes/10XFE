import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonPropTypes } from "../../types/app.type";
import { MotionProps } from "framer-motion";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropTypes & MotionProps>(({ variant, fontSize, radius, padding, border, background }) => {
    return {
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 700,
        fontSize: fontSize || 15,
        lineHeight: "normal",
        borderRadius: radius || "5px",
        border: border || "none",
        color: "#FFFFFF",
        background: (variant === "contained") ? background : "#000000",
        padding: padding || "calc(var(--basic-padding)/2) calc(var(--basic-padding))",
        textTransform: "capitalize",
        minWidth: 0,
        "&:hover": {
            border: border || "none",
            background: (variant === "contained") ? background : "#000000",
        }
    }
})
