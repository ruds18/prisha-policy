import React from "react";
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

function Sidebar() {
  const options = [
    { icon: bell, text: "Notification" },
    { icon: home, text: "Home" },
    { icon: plans, text: "Plans" },
    { icon: dependents, text: "Dependents" },
    { icon: claims, text: "Claims" },
    { icon: hospital, text: "Hospitals" },
    { icon: person, text: "Profile" },
  ];
  return (
    <div className="flex flex-col  w-[20%]  border-r border-grey">
      <div className="flex  py-5 pl-5 flex-row w-full items-center border-b border-grey ">
        <img className="h-8 w-8" src={profile} alt="" />
        <h1 className="ml-3">Employee Name</h1>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col mt-1 pl-5">
          {options.map((option, id) => (
            <div key={id}>
              <p className="flex mt-4 items-center " >
              <img
                className="h-4 w-4 mr-5 ml-1"
                src={option.icon}
                alt=""
              />
              {option.text}
            </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <img className="px-2" src={whatsNew} alt="" />
          <img className="p-2" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
