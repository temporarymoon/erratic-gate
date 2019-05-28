import { Pin } from "../pin";

export interface ComponentState {
    position: [number,number]
    scale: [number,number]
    template: string
    id: number
}

export interface activationContext {
    inputs: Pin[]
    outputs: Pin[]
    succes: (mes: string) => any
    error: (mes:string) => any
}

export type materialMode = "standard_image" | "color"