// 

import { useEffect, useState } from "react";
import { Calendar, User, Phone, Heart, Shield } from "lucide-react";

type Patient = {
  id: string;
  name: string;
  avatar: string;
  dob: string;
  gender: string;
  contact: string;
  emergencyContact: string;
  insurance: string;
};

async function fetchPatient(): Promise<Patient> {

  return {
    id: "1",
    name: "Jessica Taylor",
    avatar: "https://i.pravatar.cc/150?img=4",
    dob: "August 23, 1996",
    gender: "Female",
    contact: "(415) 555-1234",
    emergencyContact: "(415) 555-5678",
    insurance: "Sunrise Health Assurance",
  };
}

export default function PatientProfile() {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const loadPatient = async () => {
      const data = await fetchPatient();
      setPatient(data);
    };
    loadPatient();
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
        src={patient.avatar}
        alt={patient.name}
        className="w-[200px] h-[200px] rounded-full object-cover mb-4"
      />

      <h2 className="text-lg font-bold text-[#072635]">{patient.name}</h2>

      <div className="w-full mt-5 space-y-4 text-sm text-gray-700">
        <div className="flex items-start gap-3">
          <Calendar className="text-teal-500" size={18} />
          <div>
            <p className="font-medium">Date Of Birth</p>
            <p className="text-gray-500">{patient.dob}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <User className="text-teal-500" size={18} />
          <div>
            <p className="font-medium">Gender</p>
            <p className="text-gray-500">{patient.gender}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="text-teal-500" size={18} />
          <div>
            <p className="font-medium">Contact Info.</p>
            <p className="text-gray-500">{patient.contact}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Heart className="text-teal-500" size={18} />
          <div>
            <p className="font-medium">Emergency Contacts</p>
            <p className="text-gray-500">{patient.emergencyContact}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="text-teal-500" size={18} />
          <div>
            <p className="font-medium">Insurance Provider</p>
            <p className="text-gray-500">{patient.insurance}</p>
          </div>
        </div>
      </div>

      <button className="mt-6 w-[220px] h-[41px] bg-teal-500 text-black text-[11px] py-2 rounded-full">
        Show All Information
      </button>
    </div>
  );
}
