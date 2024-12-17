import { InputBaseProps } from "@mui/material"

export type BaseButtonPropTypes = {
    fontSize?: number,
    radius?: string,
    padding?: string,
    border?: string,
    background?: string,
}

export type BaseInputPropsType = {
    weight?: number,
    colour?: string,
    bgcolor?: string,
    border?: string,
    radius?: string,
} & InputBaseProps
