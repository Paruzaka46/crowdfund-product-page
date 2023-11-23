import React, { useContext, useState } from "react";

const PickContext = React.createContext()
const PickUpdateContext = React.createContext()

export function usePick() {
    return useContext(PickContext)
}

export function usePickUpdate() {
    return useContext(PickUpdateContext)
}

export function ModalProvider({children}) {
    const [radio, setRadio] = useState(-1)

    const pickModal = (x) => {
        setRadio(() => x)
    }

    return (
        <PickContext.Provider value={radio}>
            <PickUpdateContext.Provider value={pickModal}>
                {children}
            </PickUpdateContext.Provider>
        </PickContext.Provider>
    )
}