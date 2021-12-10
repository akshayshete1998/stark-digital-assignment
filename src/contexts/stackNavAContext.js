import React, { useState, ReactNode, createContext } from 'react'
export const StackNavAContext = createContext()
export const StackNavAContextProvider = () => {
    return (
        <StackNavAContext.Provider
            value={{}}>
            {children}
        </StackNavAContext.Provider>
    )
}