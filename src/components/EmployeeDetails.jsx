import empty from "../assets/empty.png";
import DependentInfoCard from "./DependentInfoCard";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import {useSelector} from 'react-redux'

function EmployeeDetails() {
const isClose = useSelector(state => state.toggle.value);
 const userRole = useSelector(state=>state.user.role);

 

  return (
    <>
      {isClose  ? (
        <div className={`flex justify-center items-center flex-col h-full` }>
          <img src={empty} />
          <h1>{userRole==='manager'?'No employee selected' : 'No dependent selected'}</h1>
          <p className="font-light text-gray-500">
            Please select an {userRole==='manager'?'employee ' : 'dependent'} to view details
          </p>
        </div>
      ) : (
        <div className="flex flex-col ">
          <div className="border-b-2 border-blue_dark p-2">
            <h1 className="text-blue_dark">Policy dependants</h1>
          </div>
          <div className="mt-4 border m-3 rounded-lg">
            <div className=" p-2 flex justify-between flex bg-red_custom">
              <h1 className="flex items-center">
                <FaPeopleGroup style={{marginRight:'0.5rem' , fontSize:'1.2rem'}} />
                Group health insuarance
              </h1>
              <p className="flex items-center" >4/4  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button" ><IoIosArrowUp style={{marginLeft:'1rem'}}  /></button> </p>
      
            </div>
            
            <div  className="w-100%  " >
              <DependentInfoCard />
              <DependentInfoCard />
              <DependentInfoCard />
              <DependentInfoCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeeDetails;
