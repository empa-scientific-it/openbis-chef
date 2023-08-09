import { createContext } from "react";
import { Facade } from "./api";


export interface OpenbisContext {
    service: Facade
}


export const OpenbisContext = createContext<OpenbisContext>({
    service: {} as Facade
})