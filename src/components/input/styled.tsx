import { InputBase, styled } from "@mui/material";
import { BaseInputPropsType } from "../../types/app.type";

export const BaseInput = styled(InputBase)<BaseInputPropsType>(({ colour, bgcolor, weight, size, border, radius }) => {
    return {
        fontFamily: "Roboto",
        fontWeight: weight || 400,
        fontSize: size || "18px",
        lineHeight: "normal",
        border: border || "none",
        borderRadius: radius || "5px",
        color: colour || "#000000",
        backgroundColor: bgcolor || "transparent",
        padding: "calc(var(--basic-padding)/2)",
        outline: "none",
        "& .MuiInputBase-input": {
            textOverflow: "ellipsis",
            padding: 0,
        }
    }
})