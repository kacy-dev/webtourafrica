// 

import { useEffect, useState } from "react";
import { Calendar, User, Phone, Heart, ShieldCheck } from "lucide-react";
import { getJessica } from "../services/api";
import type { Patient } from "../services/api";


export default function PatientProfile() {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {

    getJessica().then(setPatient).catch(console.error);

  }, []);

  if (!patient) {
    return (
      <div className="w-80 bg-white rounded-2xl shadow p-6 flex items-center justify-center mt-6">
        <p className="text-gray-500">Loading patient...</p>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white rounded-2xl shadow p-6 flex flex-col items-center mt-6">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="w-[200px] h-[200px] rounded-full object-cover mb-4"
      />

      <h2 className="text-lg font-bold text-[#072635]">{patient.name}</h2>

      <div className="w-full mt-5 space-y-4 text-sm text-gray-700">
        <div className="flex items-start gap-3">
          <span className="bg-gray-100 p-3 rounded-full">
            <Calendar className="" size={18} />

          </span>
          <div>
            <p className="font-medium">Date Of Birth</p>
            <p className="text-black text-[13px] ">{patient.date_of_birth}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="bg-gray-100 p-3 rounded-full">
            <User className="" size={18} />
          </span>
          <div>
            <p className="font-medium">Gender</p>
            <p className="text-black text-[13px]">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="bg-gray-100 p-3 rounded-full">
            <Phone className="" size={18} />
          </span>
          <div>
            <p className="font-medium">Contact Info.</p>
            <p className="text-black text-[13px]">{patient.phone_number}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="bg-gray-100 p-3 rounded-full">
            <Heart className="" size={18} />
          </span>
          <div>
            <p className="font-medium">Emergency Contacts</p>
            <p className="text-black text-[13px]">{patient.emergency_contact}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="bg-gray-100 p-3 rounded-full">
            <ShieldCheck className="" size={18} />
          </span>
          <div>
            <p className="font-medium">Insurance Provider</p>
            <p className="text-black text-[13px]">{patient.insurance_type}</p>
          </div>
        </div>
      </div>

      <button className="mt-6 w-[220px] h-[41px] bg-teal-500 text-black text-[11px] py-2 rounded-full">
        Show All Information
      </button>
    </div>
  );
}
