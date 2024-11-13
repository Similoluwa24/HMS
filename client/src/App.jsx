import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPages from './landinPage/LandingPages'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Appointment from './pages/patient/Appointment'
import History from './pages/patient/History'
import Billings from './pages/patient/Billings'
import Settings from './pages/patient/Settings'
import PatientLayout from './components/patient/PatientLayout'
import Home from './pages/patient/Home'
import { HospitalProvider } from './context/HospitalContext'
import Gallery from './landinPage/Gallery'
import Contact from './landinPage/Contact'
import ServicePage from './frontPages/ServicePage'
import Doctors from './frontPages/Doctors'
import BookAppointment from './frontPages/BookAppointment'
import AboutPage from './frontPages/AboutPage'
import AdminLayout from './components/admin/AdminLayout'
import CreateDoctors from './pages/admin/CreateDoctors'
import CreatePatient from './pages/admin/CreatePatient'
import CreateAppointment from './pages/admin/CreateAppointment'
import AllDoctors from './pages/admin/AllDoctors'
import AllPatients from './pages/admin/AllPatients'
import AllAppointment from './pages/admin/AllAppointment'
import AdminSidebar from './components/admin/AdminSidebar'
import AdminHome from './pages/admin/AdminHome'
import Modal from './components/common/Modal'
import EditPatient from './pages/admin/EditPatient'
import EditAppointment from './pages/admin/EditAppointment'
import EditDoctors from './pages/admin/EditDoctors'
import AdminPharmacy from './pages/admin/AdminPharmacy'
import AllDepartments from './pages/admin/AllDepartments'
import AllInventory from './pages/admin/AllInventory'
import AllAdmin from './pages/admin/AllAdmin'
import MyPrescriptions from './pages/patient/MyPrescriptions'
import DoctorLayout from './components/doctor/DoctorLayout'
import DoctorHome from './pages/doctor/DoctorHome'
import DoctorAppointment from './pages/doctor/DoctorAppointment'
import DrPrescription from './pages/doctor/DrPrescription'
import AdminPayment from './pages/admin/AdminPayment'
import DrSettings from './pages/doctor/DrSettings'
import { AuthProvider } from './context/AuthContext'
import AuthHandler from './components/common/AuthHandler'
import OtpPage from './pages/auth/OtpPage'
import ForgotPwd from './pages/auth/ForgotPwd'
import ResetPwd from './pages/auth/ResetPwd'
import RedirectPage from './pages/auth/RedirectPage'
import Alert from './shared/alert'
import AppDetails from './pages/patient/AppDetails'
import Diagnosis from './pages/doctor/Diagnosis'
import PatientDiagnosis from './pages/patient/PatientDiagnosis'
import AppointmentDetails from './pages/doctor/AppointmentDetails'

function App() {
  const token = localStorage.getItem('user')
  const authInitialToken = {user : token ?? null }
  return (
    <div>
      <AuthProvider defaultState={authInitialToken}>
        <HospitalProvider>
            <Alert/>
          <Routes>
            <Route path='/' element={<LandingPages/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<ServicePage/>}/>
            <Route path='/doctors' element={<Doctors/>}/>
            <Route path='/appointment' element={<BookAppointment/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/modal' element={<Modal/>}/>
            

            <Route path='/auth' element={<AuthLayout/>}>
              <Route path='otp' element={<OtpPage/>} />
              <Route path='forgot' element={<ForgotPwd/>} />
              <Route path='resetPwd/:token' element={<ResetPwd/>} />
              <Route path='redirect' element={<RedirectPage/>} />
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
            </Route>
            <Route path='/user' element={
              // <AuthHandler>
              <PatientLayout/>
              // </AuthHandler>
              }>
              <Route path='appointment' element={<Appointment/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path='history' element={<History/>}/>
              <Route path='billing' element={<Billings/>}/>
              <Route path='settings' element={<Settings/>}/>
              <Route path='prescription' element={<MyPrescriptions/>}/>
              <Route path='details/:id' element={<AppDetails/>} />
              <Route path='diagnosis' element={<PatientDiagnosis/>} />
              
            </Route>

            <Route path='/admin' element={
              // <AuthHandler>
              <AdminLayout/>
              // </AuthHandler>
              } >
                <Route path='sidebar' element={<AdminSidebar/>} />
                <Route path='home' element={<AdminHome/>} />
                <Route path='createdoc' element={<CreateDoctors/>}/>
                <Route path='createpa' element={<CreatePatient/>}/>
                <Route path='createapp' element={<CreateAppointment/>}/>
                <Route path='editpa/:_id' element={<EditPatient/>} />
                <Route path='editapp/:id' element={<EditAppointment/>} />
                <Route path='editdoc/:id' element={<EditDoctors/>} />
                <Route path='alldoc' element={<AllDoctors/>}/>
                <Route path='allpa' element={<AllPatients/>}/>
                <Route path='allapp' element={<AllAppointment/>}/>
                <Route path='alldepart' element={<AllDepartments/>}/>
                <Route path='allinvent' element={<AllInventory/>}/>
                <Route path='allpharm' element={<AdminPharmacy/>}/>
                <Route path='alladmin' element={<AllAdmin/>}/>
                <Route path='transactions' element={<AdminPayment/>}/>
            </Route>

            <Route path='/doctor' element={
              // <AuthHandler>
              <DoctorLayout/>
              /* </AuthHandler> */
              } >
              <Route path='home' element={<DoctorHome/>} />
              <Route path='appointment' element={<DoctorAppointment/>} />
              <Route path='prescription' element={<DrPrescription/>} />
              <Route path='settings' element={<DrSettings/>} />
              <Route path='diagnosis' element={<Diagnosis/>} />
              <Route path='details' element={<AppointmentDetails/>} />

            </Route>
          </Routes>
        </HospitalProvider>
      </AuthProvider>
    </div>
  )
}

export default App