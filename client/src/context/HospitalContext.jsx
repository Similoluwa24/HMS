import { createContext, useEffect, useState } from "react";






const HospitalContext = createContext()

export const HospitalProvider = ({children})=>{
    useEffect(()=>{
        getdoctors()
    },[])
    const [doctors, setDoctors] = useState([])

    const getdoctors = async ()=>{
        const res = await fetch('http://localhost:3000/doctors')
        const data = await res.json()
        setDoctors(data)
        console.log(data);
        
    }

    return (
        <HospitalContext.Provider value={{
            doctors
        }}>
                {children}
        </HospitalContext.Provider>
    )
}

export default HospitalContext