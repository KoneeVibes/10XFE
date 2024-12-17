import React from "react"

export type ContextType = {
    openMenu: boolean
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
    headerTextHeight: number | null
    setHeaderTextHeight: React.Dispatch<React.SetStateAction<number | null>>
    openingsComponentHeight: number | null
    setOpeningsComponentHeight: React.Dispatch<React.SetStateAction<number | null>>
}

export type ContextProviderPropsType = {
    children: React.ReactNode
}