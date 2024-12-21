import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext);
  const { aToken } = useContext(AdminContext);

  // State to track if the sidebar is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle the collapsed state
  const toggleSidebar = () => setIsCollapsed((prevState) => !prevState);

  return (
    <div
      className={`min-h-screen bg-white border-r ${
        isCollapsed ? "w-16" : "w-72"
      } transition-all duration-300`}
    >
      {/* Button to toggle the sidebar */}
      <button
        onClick={toggleSidebar}
        className="absolute top-2.5 left-3 z-10 p-2 bg-white rounded-full shadow-md"
      >
        <img src={assets.list} className="w-6 h-6" />
      </button>

      {aToken && (
        <ul className={`text-[#515151] mt-5 ${isCollapsed ? "hidden" : ""}`}>
          <NavLink
            to={"/admin-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.home_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>
              Dashboard
            </p>
          </NavLink>
          <NavLink
            to={"/all-appointments"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.appointment_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>
              Appointments
            </p>
          </NavLink>
          <NavLink
            to={"/add-doctor"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.add_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>
              Add Doctor
            </p>
          </NavLink>
          <NavLink
            to={"/doctor-list"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.people_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>
              Doctors List
            </p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul className={`text-[#515151] mt-5 ${isCollapsed ? "hidden" : ""}`}>
          <NavLink
            to={"/doctor-dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.home_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>
              Dashboard
            </p>
          </NavLink>
          <NavLink
            to={"/doctor-appointments"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.appointment_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>
              Appointments
            </p>
          </NavLink>
          <NavLink
            to={"/doctor-profile"}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
          >
            <img className="min-w-5" src={assets.people_icon} alt="" />
            <p className={`${isCollapsed ? "hidden" : ""} md:block`}>Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
