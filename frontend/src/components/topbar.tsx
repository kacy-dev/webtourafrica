import { Home, Users, Calendar, MessageSquare, CreditCard, Settings, MoreVertical } from "lucide-react";
import Logo from "../assets/img/TestLogo.png";

export default function TopBar() {
  return (
    <header className=" fixed z-10 w-full bg-white shadow-sm border-b rounded-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img src={Logo} className="h-10" alt="logo" />
          {/* </h1> */}
        </div>


        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-600 ">
            <Home size={18} />
            <span className="text-sm font-medium">Overview</span>
          </button>

          <button className="flex items-center gap-2 bg-teal-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
            <Users size={18} />
            Patients
          </button>

          <button className="flex items-center gap-2 text-gray-600 ">
            <Calendar size={18} />
            <span className="text-sm font-medium">Schedule</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 ">
            <MessageSquare size={18} />
            <span className="text-sm font-medium">Message</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 ">
            <CreditCard size={18} />
            <span className="text-sm font-medium">Transactions</span>
          </button>
        </nav>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Profile"
            className="w-9 h-9 rounded-full border"
          />
          <div className="text-sm leading-tight">
            <p className="font-semibold text-gray-800">Dr. Jose Simmons</p>
            <p className="text-gray-500 text-xs">General Practitioner</p>
          </div>
          <span className="h-8 bg-neutral-300 w-[1px]"></span>
          <button className="text-gray-500 ">
            <Settings size={18} />
          </button>
          <MoreVertical size={18} className="text-gray-500 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
