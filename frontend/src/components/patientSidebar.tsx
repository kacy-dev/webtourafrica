import react from "react";
import {Search, MoreHorizontal, MoreVertical } from "lucide-react";

const patients = [
  { id: 1, name: "Emily Carter", gender: "Female", age: 18, img: "https://i.pravatar.cc/40?img=1", badge: "299" },
  { id: 2, name: "Ryan Johnson", gender: "Male", age: 45, img: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Brandon Mitchell", gender: "Male", age: 36, img: "https://i.pravatar.cc/40?img=3"},
  { id: 4, name: "Jessica Taylor", gender: "Female", age: 28, img: "https://i.pravatar.cc/40?img=4"},
  { id: 5, name: "Samantha Johnson", gender: "Female", age: 56, img: "https://i.pravatar.cc/40?img=5" },
  { id: 6, name: "Ashley Martinez", gender: "Female", age: 54, img: "https://i.pravatar.cc/40?img=6" },
  { id: 7, name: "Olivia Brown", gender: "Female", age: 32, img: "https://i.pravatar.cc/40?img=7" },
  { id: 8, name: "Tyler Davis", gender: "Male", age: 19, img: "https://i.pravatar.cc/40?img=8" },
  { id: 9, name: "Kevin Anderson", gender: "Male", age: 30, img: "https://i.pravatar.cc/40?img=9" },
  { id: 10, name: "Dylan Thompson", gender: "Male", age: 36, img: "https://i.pravatar.cc/40?img=10" },
];

export default function PatientSidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col mt-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 mt-3">
        <h2 className="text-lg font-semibold text-black">Patients</h2>
        <Search size={18} className="text-gray-500 cursor-pointer" />
      </div>

      
      <div className="flex-1 overflow-y-auto">
        {patients.map((p) => (
          <div
            key={p.id}
            className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer`}
          >
           
            <div className="flex items-center gap-3">
              <img src={p.img} alt={p.name} className="w-10 h-10 rounded-full" />
              <div className="leading-tight">
                <p className="font-medium text-sm flex items-center gap-1 text-[#072635]">
                  {p.name}
                  {p.badge && (
                    <span className="bg-pink-500 text-white text-xs px-2 rounded-full ml-1">
                      {p.badge}
                    </span>
                  )}
                </p>
                <p className="text-[#707070] text-xs">{p.gender}, {p.age}</p>
              </div>
            </div>


            <MoreHorizontal size={18} className="text-gray-400 cursor-pointer" />
           
          </div>
        ))}
      </div>
    </aside>
  );
}
