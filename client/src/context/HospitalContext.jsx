import { createContext, useEffect, useState } from "react";
const HospitalContext = createContext()

export const HospitalProvider = ({children})=>{
    useEffect(()=>{
        getalldoctors()
        getallQuestions()
        getallDepartment()
        getallPatient()
        getallApointment()
    },[])
    const [doctors, setDoctors] = useState([])
    const [faq, setFaq] = useState([])
    const [department, setDepartment] = useState([])
    const [patient, setPatient] = useState([])
    const [appointment, setAppointment] = useState([])
    const [editAppointment, setEditAppointment] = useState({
      items:{},
      edit:false
    })
    const [editPatient, setEditPatient] = useState({
      edit : false,
      items:{}
    })
    const [editDoctors, setEditDoctors] = useState({
      edit:false,
      items:{}
    })
    const getalldoctors = async ()=>{
        const res = await fetch('http://localhost:3000/doctors')
        const data = await res.json()
        setDoctors(data)
        
    }
    const getallQuestions = async ()=>{
        const res = await fetch('http://localhost:3000/faq')
        const data = await res.json()
        setFaq(data)
        
    }
    const getallDepartment = async ()=>{
        const res = await fetch('http://localhost:3000/department')
        const data = await res.json()
        setDepartment(data)
        
    }
    const getallPatient = async ()=>{
        const res = await fetch('http://localhost:3000/user')
        const data = await res.json()
        setPatient(data)
        
    }

    const getallApointment = async () => {
        const res = await fetch('http://localhost:3000/appointment')
        const data = await res.json()
        setAppointment(data)
    }
    const addAppointment = async (newAppointment) =>{
        const res = await fetch('http://localhost:3000/appointment',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newAppointment)
        })
        const data = await res.json()
         newAppointment.id = appointment.length + 1
        setAppointment([data, ...appointment])
    }
    const deleteAppointment = async (id) => {
        try {
          const res = await fetch(`http://localhost:3000/appointment/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            setAppointment(appointment.filter((appointment) => appointment.id !== id));
          } else {
            console.error("Failed to delete appointment");
          }
        } catch (error) {
          console.error("Error deleting appointment:", error);
        }
      };

    const editAppointmentHandler = (items)=>{
      setEditAppointment({
        edit:true,
        items
      })
    }

    const updateAppointmentHandler = async (id, updItems) => {
      try {
        const res = await fetch(`http://localhost:3000/appointment/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updItems)
        });
        const updatedAppointment = appointment.map((item) => (item.id === id ? { ...item, ...updItems } : item));
        setAppointment(updatedAppointment);
      } catch (error) {
        console.error("Error updating appointment:", error);
      }
    };
    const addPatient = async (newPatient) =>{
        const res = await fetch ("http://localhost:3000/user",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newPatient)
        })
        const data = await res.json()
        newPatient.id = patient.length + 1
        setPatient([data, ...patient])
    }
    const deletePatient = async (id) => {
        try {
          const res = await fetch(`http://localhost:3000/user/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            setPatient(patient.filter((patient) => patient.id !== id));
          } else {
            console.error("Failed to delete appointment");
          }
        } catch (error) {
          console.error("Error deleting appointment:", error);
        }
      };
    const editPatientHandler = (items)=>{
      setEditPatient({
        edit:true,
        items
      })
      console.log(editPatient);
      
    }
    const updatePatientHandler = async (id, updItems) => {
      try {
        const res = await fetch(`http://localhost:3000/user/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updItems)
        });
        const updatedPatient = patient.map((item) => (item.id === id ? { ...item, ...updItems } : item));
        setPatient(updatedPatient);
      } catch (error) {
        console.error("Error updating patient:", error);
      }
    };
    const addDoctor = async (newDoctor)=>{
        const res = await fetch('http://localhost:3000/doctors',{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(newDoctor)
        })
        const data = await res.json()
        newDoctor.id = doctors.length + 1
        setDoctors([data, ...doctors])
        console.log(data);
        
        
    }

    const deleteDoctor = async (id) => {
        try {
          const res = await fetch(`http://localhost:3000/doctors/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            setDoctors(doctors.filter((doctors) => doctors.id !== id));
          } else {
            console.error("Failed to delete appointment");
          }
        } catch (error) {
          console.error("Error deleting appointment:", error);
        }
      };
    const editDoctorHandler = (items)=>{
      setEditDoctors({
        edit: true,
        items
      })
    }
    const updateDoctorHandler = async(id, updItems)=>{
      try {
        const res = await fetch(`http://localhost:3000/doctors/${id}`,{
          method:'PUT',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(updItems)
        })
        const updatedDoctor = doctors.map((items)=>{items.id === id ? {...items, ...updItems}: items})
        setDoctors(updatedDoctor)
      } catch (error) {
        
      }
      
    }
    

    return (
        <HospitalContext.Provider value={{
            doctors,
            faq,
            department,
            patient,
            editPatient,
            appointment,
            editAppointment,
            editDoctors,
            addAppointment,
            deleteAppointment,
            editAppointmentHandler,
            updateAppointmentHandler,
            addPatient,
            deletePatient,
            editPatientHandler,
            updatePatientHandler,
            addDoctor,
            deleteDoctor,
            editDoctorHandler,
            updateDoctorHandler
        }}>
                {children}
        </HospitalContext.Provider>
    )
}

export default HospitalContext