import profile from "../assets/profile.png";
import whatsNew from "../assets/whatsNew.png";
import logo from "../assets/logo.png";
import bell from "../assets/bell.png";
import home from "../assets/home.png";
import plans from "../assets/plans.png";
import dependents from "../assets/dependents.png";
import hospital from "../assets/hospital.png";
import claims from "../assets/claims.png";
import person from "../assets/person.png";
import { useSelector , useDispatch } from "react-redux";
import { toggleUser } from "../features/user/userSlice";
import { toggleEmployeeInfo } from "../features/toggle/toggleSlice";

function Sidebar() {
  const userRole = useSelector((state) => state.user.role);
  const dipatch = useDispatch();
  const options = [
    { icon: bell, text: "Notification" },
    { icon: home, text: "Home" },
    { icon: plans, text: "Plans" },
    { icon: dependents, text: "Dependents" },
    { icon: claims, text: "Claims" },
    { icon: hospital, text: "Hospitals" },
    { icon: person, text: "Profile" },
  ];

  const handleEmployeeView = ()=>{
    dipatch(toggleUser());
  }

  return (
    <div className="flex flex-col  w-[20%]  border-r border-grey">
      <div className="flex  py-5 pl-5 flex-row w-full items-center border-b border-grey ">
        <img className="h-8 w-8" src={profile} alt="" />
        <h1 className="ml-3">Employee Name</h1>
      </div>

      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col ">
          {options.map((option, id) => (
            <div
              key={id}
              className={` ${
                option.text === "Dependents" ? "bg-blue_light" : ""
              } pl-5 p-3 flex items-center`}
            >
              <p className="flex pl-2 items-center cursor-pointer ">
                <img className="h-4 w-4 mr-5 ml-1" src={option.icon} alt="" />
                {option.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          {userRole == "manager" ? (
            <label className=" relative flex items-center cursor-pointer items-center justify-center">
              <input type="checkbox" value="" className="sr-only peer" onClick={()=>handleEmployeeView()} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none    rounded-full  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm  text-black">
                Employee view
              </span>
            </label>
          ) : (
            <img className="px-2" src={whatsNew} alt="" />
          )}
          <img className="p-2" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
