import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function DefaultLayout({children}){
    return(<>
<NavBar scrolled={scrolled} device={mobile} handleStudentLogin={handleStudentLogin} handleContactPopup={e=>ModalHandler(true)}></NavBar>{children}
<Footer device={mobile} handleSubmit={submitter} handleStudentLogin={handleStudentLogin} handleContactPopup={e=>ModalHandler(true)}></Footer></>)
}

export default DefaultLayout;