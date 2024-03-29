import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import './home.css';
import { ChatContextProvider } from '../../context/chatContext';
// import FormComponent from '../form-component/form-component'; 
import ContactForm from '../contact-form/contact-form';
import Setting from './Setting';
import Modal from './Modal';
import logo from '../../assets/logo.png';
import ChatView from './ChatView';
// import PatientSummary from "../PatientSummary/PatientSummary";
import { usePromiseTracker } from "react-promise-tracker";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import PatientAppointmentHistory from "../PatientHistory/PatientAppointmentHistory";
const Home = (props) => {
    const { promiseInProgress } = usePromiseTracker();
    const { loggedIn, email } = props
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [showForm,setShowForm] = useState(true);
    const [summaryData,setSummaryData] = useState("");
    
    const onButtonClick = () => {
        // You'll update this function later
    }

    return <div className="Home">
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={promiseInProgress}>
                <CircularProgress color="inherit" size={60}/>
            </Backdrop>
            <div className="split-screen">
                <div className="left">
                <div className="content">
                <ChatContextProvider>
                    {/* <Modal title="Setting" modalOpen={modalOpen} setModalOpen={setModalOpen}>
                        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
                    </Modal> */}
                    <div className="flex transition duration-500 ease-in-out ">
                        {/* <SideBar /> */}
                        <ChatView />
                    </div>
                </ChatContextProvider>
                </div>
                </div>
                <div className="right">
                <div className="content">
                    {/* <FormComponent />  */}
                    
                    {showForm ? <ContactForm setSummaryData = {setSummaryData} setShowForm = {setShowForm}/> : <PatientAppointmentHistory summaryData = {summaryData}/> }
                    
                </div>
                </div>
            </div>
        </div>
}

export default Home
