import { createContext, useState } from "react";





const HospitalContext = createContext()

export const HospitalProvider = ({children})=>{
    const [data, SetData] = useState()
    return (
        <HospitalContext.Provider value={{
            data
        }}>
                {children}
        </HospitalContext.Provider>
    )
}

export default HospitalContext