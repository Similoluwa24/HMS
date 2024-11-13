import { createContext,useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
const HospitalContext = createContext()
import Cookies from 'js-cookie'
import useAlert from "../hooks/useAlert";

export const HospitalProvider = ({children})=>{
    useEffect(()=>{
        // fetchUser()
        fetchUserAll()
        getallQuestions()
        getallDepartment()
        getallApointment()
        getallPharmacy()
        getInventory()
        getAppointmentById();
    },[])
    // const [doctors, setDoctors] = useState([])
    const [faq, setFaq] = useState([])
    const [department, setDepartment] = useState([])
    // const [patient, setPatient] = useState([])
    const [appointment, setAppointment] = useState([])
    const [pharmacy, setPharmacy] = useState([])
    const [inventory, setInventory] = useState([])
    const [user, setUser]  = useState(null)
    const [alluser, setallUser]  = useState([])
    const [appoint, setAppoint] = useState([])
    const [state, dispatch] =  useContext(AuthContext);
     const isAuthenticated = state.user !== null
     const token = Cookies.get('token') 
     const {alertInfo, showHide} = useAlert()
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
    const[editUser, setEditUser] =useState({
      esit:false,
      items:{}
    })

    useEffect(()=>{
      const fetchUser = async () => {
        try {
          const res = await fetch('http://localhost:5000/user/me',{
            method:'GET',
            headers:{
              'Content-Type':'application/json'
            },
            credentials: 'include', // This allows cookies to be sent with the request
          })
          const data = await res.json()
          
          if (res.ok) {
            setUser(data)
          } 
          else {
            console.log({message: data});
          }
        }catch (error) {
          console.log({message:error.message});
          
        }
      }
      fetchUser()
    },[])
    const fetchUserAll = async () => {
      try {
        const res = await fetch('http://localhost:5000/user/admin',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          },
          credentials: 'include', // This allows cookies to be sent with the request
        })
        const data = await res.json()
        console.log(data);
        
        if (res.ok) {
          setallUser(data.users)
        } else {
          console.log({message: data});
        }
      } catch (error) {
        console.log({message:error.message});
        
      }
    }
    const doctors = alluser.filter((user)=>user.role === 'doctor')
    const patient = alluser.filter((user)=>user.role === 'patient')
    const admin = alluser.filter((user)=>user.role === 'admin')


    const getallQuestions = async ()=>{
        const res = await fetch('http://localhost:3000/faq')
        const data = await res.json()
        setFaq(data)
        
    }
    const getallDepartment = async ()=>{
      try {
        const res = await fetch('http://localhost:5000/department/admin/get',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          },
          credentials:'include',
        })
        const data = await res.json()
        if (!res.ok) {
          console.log(data);
          showHide('error',data.errMessage)
        } else {
          setDepartment(data.findDept)    
          console.log(data);
             
          
        }
      } catch (error) {
        console.log({message:error.message});
        
      }
        
    }
   

    const getallApointment = async () => {
      try {
        const res = await fetch('http://localhost:5000/appointment/admin',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          },
          credentials:'include',
        })
        const data = await res.json()
        if (res.ok) {
         console.log(data);
         
          setAppointment(data.findApp)      
        } else {
          console.log({message: data});
        }
      } catch (error) {
        console.log({message:error.message});
        
      }
    }
  
    //getappointment by Id
    
      const getAppointmentById = async () => {
        try {
          const res = await fetch(`http://localhost:5000/appointment/get`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', // Sends cookies with the request
          });
  
          const data = await res.json();
  
          if (!res.ok) {
            console.log(data);
            showHide('error', data.errMessage); // Show error if response is not ok
          } else {
            setAppoint(data.findApp); // Set the appointment data in state
            console.log(data);
          }
        } catch (error) {
          console.error("Network error:", error);
          showHide('error', "Network error occurred. Please try again."); // Handle network error
        }
      };
  
     
    
      
      

    const getallPharmacy = async () => {
      try {
        const res = await fetch('http://localhost:5000/pharmacy/meds',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          },
          credentials:'include',
        })
        const data = await res.json()
        if (!res.ok) {
          console.log(data);       
        } else {
          setPharmacy(data.meds)
          console.log(data);
             
        }
        
      } catch (error) {
        console.log({message:error.message});
        
      }
    }
    const getInventory = async () => {
      const res = await fetch(`http://localhost:5000/inventory/admin/get`,{
        method:'GET',
        headers:{
          'Content-Type':"appication/json"
        },
        credentials:'include'
      })
      const data = await res.json()
      if (!res.ok) {
        console.log(data);
        showHide('error',data.errMessage)
      } else {
        setInventory(data.data)
        console.log(data);
                
      }
    }
    
    const editAppointmentHandler = (items)=>{
      setEditAppointment({
        edit:true,
        items
      })
    }


 
 
    const editPatientHandler = (items)=>{
      setEditPatient({
        edit:true,
        items
      })
      console.log(editPatient);
      
    }


    const editDoctorHandler = (items)=>{
      setEditDoctors({
        edit: true,
        items
      })
    }

  

    const editPharmacyHandler = (items)=>{
      setEditPharmacy({
        edit:true,
        items
      })
    }


    const editDepartmentHandler = (items)=>{
      setEditDepartment({
        edit:true,
        items
      })
    }

    const editUserHandler = (items)=>{
      setEditUser({
        edit:true,
        items
      })
    }



    const editInventoryHandler = (items)=>{
      setEditInventory({
        edit:true,
        items
      })
    }
  
    return (
        <HospitalContext.Provider value={{
           user,
            isAuthenticated,
            alluser,
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
            alertInfo,
            appoint,
            editUser,
            editUserHandler,
            getallApointment,
            fetchUserAll,
            getallPharmacy,
            getallDepartment,
            getallQuestions,
            getInventory,
            getAppointmentById,
             showHide,
            editAppointmentHandler,
            editPatientHandler,
            editDoctorHandler,
            editPharmacyHandler,
            editDepartmentHandler,
            editInventoryHandler,

            
        }}>
                {children}
        </HospitalContext.Provider>
    )
}

export default HospitalContext