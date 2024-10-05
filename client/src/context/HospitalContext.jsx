import { createContext, useEffect, useState } from "react";
const HospitalContext = createContext()

export const HospitalProvider = ({children})=>{
    useEffect(()=>{
        getalldoctors()
        getallQuestions()
        getallDepartment()
        getallPatient()
        getallApointment()
        getallPharmacy()
        getInventory()
    },[])
    const [doctors, setDoctors] = useState([])
    const [faq, setFaq] = useState([])
    const [department, setDepartment] = useState([])
    const [patient, setPatient] = useState([])
    const [appointment, setAppointment] = useState([])
    const [pharmacy, setPharmacy] = useState([])
    const [inventory, setInventory] = useState([])
    const [editAppointment, setEditAppointment] = useState({
      items:{},
      edit:false
    })
    const [editInventory , setEditInventory] = useState({
      edit: false,
      items:{}
    })
    const [editPatient, setEditPatient] = useState({
      edit : false,
      items:{}
    })
    const [editDoctors, setEditDoctors] = useState({
      edit:false,
      items:{}
    })
    const [editPharmacy, setEditPharmacy] = useState({
      edit:false,
      items:{}
    })
    const [editDepartment, setEditDepartment ] = useState({
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
      try {
        const res = await fetch('http://localhost:3000/department')
        const data = await res.json()
        setDepartment(data)       
      } catch (error) {
        console.log({message:error.message});
        
      }
        
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
    const getallPharmacy = async () => {
      const res = await fetch('http://localhost:3000/pharmacy')
      const data = await res.json()
      setPharmacy(data)
    }
    const getInventory = async () => {
      const res = await fetch(`http://localhost:3000/inventory`,{
        method:'GET',
        headers:{
          'Content-Type':"appication/json"
        }
      })
      const data = await res.json()
      setInventory(data)
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
        console.log({message:error.message});
        
      }
      
    }

    const addPharmacy = async(newPharmacy) =>{
     try {
      const res = await fetch('http://localhost:3000/pharmacy',{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body: JSON.stringify(newPharmacy)
      })
      const data = await res.json()
      newPharmacy.id = pharmacy.length + 1
      setPharmacy([data, ...pharmacy])
     } catch (error) {
      console.log({message:error.message});
      
     }
    }
    
    const deletePharmacy = async(id) =>{
      try {
        const res = await fetch(`http://localhost:3000/pharmacy/${id}`,{
          method:"DELETE",
          headers:{
            'Content-Type':"application/json"
          }
        }) 
        if (res.ok) {
          const data = pharmacy.filter((items)=>{items.id !== id})
          setPharmacy(data)          
        } else {
          console.log('Unable to delete item')
        }
      } catch (error) {
        console.log({message:error.message});
        
      }
    }

    const editPharmacyHandler = (items)=>{
      setEditPharmacy({
        edit:true,
        items
      })
    }

    const updatePharmacyHandler = async(id, upItems) =>{
      try {
        const res = await fetch (`http://localhost:3000/pharmacy/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':"application/json"
          },
          body:JSON.stringify(upItems)
        })
        const updatePharmacy = pharmacy.map((item)=>{item.id ===id ? {...data, ...upItems} : item})
        setPharmacy(updatePharmacy)
      } catch (error) {
        
      }
    }

    const addDepartment = async(newDepart) =>{
      try {
        const res = await fetch ('http://localhost:3000/department',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newDepart)
        })
        if (res.ok) {
          newDepart.id = department.length + 1
          const data = await res.json()
          setDepartment([data, ...department])                  
        } else {
          console.log("Unable to add department");          
        }
      } catch (error) {
        console.log({message:error.message});
        
      }
    }

    const deleteDepartment = async (id) => {
      try {
        const res = await fetch (`http://localhost:3000/department/${id}`,{
          method:'DELETE',
          headers:{
            "Content-Type":"application/json"
          }
        })
        if (res.ok) {
         const data =  department.filter((item)=>{item.id !== id})
         setDepartment(data)
        } else {
          console.log("Unable to delete item");
          
        }
      } catch (error) {
        console.log({message:error.message});
        
      }
    }

    const editDepartmentHandler = (items)=>{
      setEditDepartment({
        edit:true,
        items
      })
    }
    const updateDepartmentHandler = async(id, updItems)=>{
      try {
        const res = await fetch(`http://localhost:3000/department/${id}`,{
          method:'PUT',
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(updItems)
        })
        const updatedDept = department.map((items)=>{items.id === id ? {...data, ...updItems}: items})
        setDepartment(updatedDept)
      } catch (error) {
        
      }
    }
    const addInventory = async(newInventory)=>{
      try {
        const res = await fetch ('http://localhost:3000/inventory',{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newInventory)
        })
        const data = res.json()
        newInventory.id = inventory.length + 1
        setInventory([data, ...newInventory])
      } catch (error) {
        console.log({message:error.message});
        
      }
    }
    const deleteInventory = async (id) => {
      try {
        const res = await fetch (`http://localhost:3000/inventory/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        })
        const deleteInventory = inventory.filter((item)=>{item.id !== id})
        setInventory(deleteInventory) 
      } catch (error) {
        console.log({message:error.message});        
      }
    }
    const editInventoryHandler = (items)=>{
      setEditInventory({
        edit:true,
        items
      })
    }
    const updateInventoryHandler = async(id, updItems)=>{
      try {
        const res = await fetch (`http://localhost:3000/inventory/${id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(updItems)
        }) 
        const data = inventory.map((item)=>{item.id === id ?{...data, ...updItems}: item})
        setInventory(data)
      } catch (error) {
        console.log({message:error.message});
        
      }
    }
    return (
        <HospitalContext.Provider value={{
            doctors,
            faq,
            department,
            patient,
            pharmacy,
            inventory,
            editPatient,
            appointment,
            editAppointment,
            editDoctors,
            editPharmacy,
            editDepartment,
            editInventory,
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
            updateDoctorHandler,
            addPharmacy,
            deletePharmacy,
            editPharmacyHandler,
            updatePharmacyHandler,
            addDepartment,
            deleteDepartment,
            editDepartmentHandler,
            updateDepartmentHandler,
            addInventory,
            deleteInventory,
            editInventoryHandler,
            updateInventoryHandler
            
        }}>
                {children}
        </HospitalContext.Provider>
    )
}

export default HospitalContext