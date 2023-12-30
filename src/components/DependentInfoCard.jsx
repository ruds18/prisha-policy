import avatar from '../assets/avatar.png'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";


function DependentInfoCard() {
  return (
    <div className={`flex p-2 m-3  rounded-md justify-between border border-grey `}>
        <div className='flex items-center'>
           <img src={avatar} className='h-10 w-10 mt-1' alt="profile image" />
            <div className='flex flex-col ml-2 ' >
                <h1 className='text-lg'>Dependent Name</h1>
                 <p className='font-light text-sm'>12/09/1994 | Spouse</p>
            </div>
        </div>
        <div className='flex items-center' style={{fontSize:'1.2rem'}}>
        <MdOutlineEdit />
        <RiDeleteBinLine style={{color:'red', marginLeft:'1rem', fontSize:'1.2rem'}} />
        </div>
    </div>
  )
}

export default DependentInfoCard