import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"
import {BsSearch} from "react-icons/bs";
import img from "../assets/userpic.png";
const Dashboard = () => {

  return (
    <div className="admin-container">
   <AdminSidebar/>
       <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data,users,docs"/>
          <FaRegBell/>
          <img src={img} alt="User"/>
        </div>
        <section className="widgetcontainer">
        
        </section>
       </main>
      
    
    </div>
  )
}

export default Dashboard