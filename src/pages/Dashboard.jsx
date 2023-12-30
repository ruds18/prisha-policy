import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import EmployeeInfoCard from "../components/EmployeeInfoCard";
import EmployeeDetails from "../components/EmployeeDetails";
import {useSelector} from 'react-redux'
import DependentInfoCard from "../components/DependentInfoCard";

function Dashboard() {
const userRole = useSelector(state=>state.user.role)
  return (
    <div className="flex h-dvh w-full">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Topbar />
        <div className="flex  w-full  h-full">
           <div className="flex flex-col w-full h-full">
             
             {userRole==='manager' ? <EmployeeInfoCard/> : <DependentInfoCard/> }
           </div>
           <div className="border-l w-[65%] h-full ">
              <EmployeeDetails/>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
