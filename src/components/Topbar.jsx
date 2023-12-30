import { BsPersonFillAdd } from "react-icons/bs";
import { BsSoundwave } from "react-icons/bs";
import {useSelector,useDispatch} from 'react-redux'


function Topbar() {
  const userRole = useSelector(state=> state.user.role);
  console.log(userRole)

  const iconStyle = {
    fontSize: "1.5rem",
    marginRight: "0.5rem",
  };

  return (

      <div className=" bg-blue_light p-4 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-blue_dark text-3xl">{userRole==='manager'?'Employees' :'Dependents'}</h1>
        <p className="font-light mt-2">Manage all the {userRole==='manager'?'employees' :'dependents'} from here</p>
      </div>

      <div className="flex">
        {userRole === "manager" ? (
          <button className="  border-2 border-blue_dark  mr-3 px-5 py-3 rounded-lg flex items-center text-blue_dark">
            <BsSoundwave style={iconStyle} /> Reports
          </button>
        ) : (
          ""
        )}

        <button className="bg-blue_dark text-white px-5 py-3 rounded-lg flex items-center">
          <BsPersonFillAdd style={iconStyle} /> {userRole==='manager'?'Add Employees' :'Add Dependents'}
        </button>
      </div>
    </div>
  );
}

export default Topbar;
