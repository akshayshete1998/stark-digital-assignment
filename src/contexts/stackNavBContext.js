import React, { useState, ReactNode } from 'react'

export const StackNavBContext = React.createContext()

export const StackNavBContextProvider = () => {
    return (
        <StackNavBContext.Provider
            value={{}}>
            {children}
        </StackNavBContext.Provider>
    )
}