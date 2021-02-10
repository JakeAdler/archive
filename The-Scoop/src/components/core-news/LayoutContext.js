import { createContext } from 'react';

export const Layouts = {
    vertical: {
        direction: "column"
    },
    horizontal: {
        direction: "row"
    }
}

export const LayoutContext = createContext(
    Layouts.vertical
)