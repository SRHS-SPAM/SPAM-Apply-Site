// SizeContext.js
"use client";
import { createContext, useContext, useState } from "react";

const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
    const [sizeValue, setSizeValue] = useState(true);

    const setGlobalSizeValue = (value) => {
        setSizeValue(value);
    };

    return (
        <SizeContext.Provider value={{ sizeValue, setGlobalSizeValue }}>
            {children}
        </SizeContext.Provider>
    );
};

export const useSize = () => {
    const context = useContext(SizeContext);

    if (!context) {
        throw new Error("useSize must be used within a SizeProvider");
    }

    return context;
};
