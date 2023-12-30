import avatar from '../assets/avatar.png'
import { GrFormNext } from "react-icons/gr";
import { toggleEmployeeInfo } from "../features/toggle/toggleSlice";
import {useDispatch , useSelector} from 'react-redux'
import { IoCloseSharp } from "react-icons/io5";



function EmployeeInfoCard() {
  const isClose = useSelector(state=>state.toggle.value);
  const dispatch = useDispatch();

  return (
    <div className={`flex p-2 m-3 rounded-md justify-between border border-grey items-center ${isClose ? '':'border border-blue_dark'}`} onClick={()=>dispatch(toggleEmployeeInfo())}>
    <div className='flex items-center '>
       <img src={avatar} className='h-10 w-10 mt-1' alt="profile image" />
        <div className='flex flex-col ml-2 ' >
            <h1 className='text-lg'>Employee</h1>
             <p className='font-light text-sm'>Employee ID | Designation</p>
        </div>
    </div>
    <div className='flex items-center p-2 rounded-lg bg-blue_light' style={{fontSize:'1.2rem',color:'#27378C'}} >
     {isClose ? <GrFormNext /> : <IoCloseSharp />
}
    </div>
</div>
  )
}

export default EmployeeInfoCard