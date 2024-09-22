import { createContext, useEffect, useState } from "react";






const HospitalContext = createContext()

export const HospitalProvider = ({children})=>{
    useEffect(()=>{
        getdoctors()
        getQuestions()
    },[])
    const [doctors, setDoctors] = useState([])
    const [faq, setFaq] = useState([])

    const getdoctors = async ()=>{
        const res = await fetch('http://localhost:3000/doctors')
        const data = await res.json()
        setDoctors(data)
        console.log(data);
        
    }
    const getQuestions = async ()=>{
        const res = await fetch('http://localhost:3000/faq')
        const data = await res.json()
        setFaq(data)
        console.log(data);
        
    }

    return (
        <HospitalContext.Provider value={{
            doctors,
            faq
        }}>
                {children}
        </HospitalContext.Provider>
    )
}

export default HospitalContext