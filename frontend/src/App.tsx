import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./App.css";
import TopBar from "./components/topbar";
import PatientSidebar from "./components/patientSidebar";
import DiagnosisHistory from "./components/diagnosisHistory";
import LabResults from "./components/labResults";
import { getJessica } from "./services/api";
import type { Patient } from "./services/api";
import PatientProfile from "./components/patientProfile";
import RespiratoryImg from "./assets/img/respiratory.png";
import TemperatureImg from "./assets/img/temperature.png";
import HeartBPMImg from "./assets/img/HeartBPM.png";

function App() {
    const [patient, setPatient] = useState<Patient | null>(null);
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        getJessica().then(setPatient).catch(console.error);
    }, []);

    const mapped_history = patient?.diagnosis_history[0];
   
    useEffect(() => {
        (async () => {
        try {
            const patient: Patient | undefined = await getJessica();
            if (patient?.diagnostic_list) {
            setList(patient.diagnostic_list);
            }
        } catch (err) {
            console.error(err);
        }
        })();
    }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 w-full py-4 px-4">
          <TopBar />
        <div className="flex">
          <PatientSidebar />
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-white p-4 rounded-xl">
            <div className="mb-4">
                <DiagnosisHistory />
            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#E0F3FA] rounded-2xl shadow p-[12px]">
                <span className="bg-white">
                  <img src={RespiratoryImg}  alt={RespiratoryImg} />
                </span>
                <h3 className="text-gray-500 text-[16px]">Respiratory Rate</h3>

                <p className="text-2xl font-bold text-black">{mapped_history?.respiratory_rate?.value ?? "_"} bpm</p>
                <span className="text-sm text-black">{mapped_history?.respiratory_rate?.levels ?? "_"  }</span>
              </div>
              <div className="bg-[#FFE6E9] rounded-2xl shadow p-[12px] ">
                <span className="bg-white">
                  <img src={TemperatureImg} alt={TemperatureImg} />
                </span>
                <h3 className="text-gray-500">Temperature</h3>
                <p className="text-2xl font-bold text-black">{mapped_history?.temperature?.value ?? "_"} °F</p>
                <span className="text-sm text-black">{mapped_history?.temperature?.levels ?? "_"}</span>
              </div>
              <div className="bg-[#FFE6F1] rounded-2xl shadow p-[12px]">
                <span>
                  <img src={HeartBPMImg} alt={HeartBPMImg} />
                </span>
                <h3 className="text-gray-500">Heart Rate</h3>
                <p className="text-2xl font-bold text-black">{mapped_history?.heart_rate?.value ?? "_"} bpm</p>
                <span className="text-sm text-black">{mapped_history?.heart_rate?.levels ?? "_"}</span>
              </div>
            </section>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 mt-6">
                <h2 className="font-semibold text-lg mb-4 text-[#072635]">
                    Diagnostic List
                </h2>
                <table className="w-full text-sm">
                    <thead className="bg-[#F6F7F8]">
                    <tr>
                        <th className="text-left p-2 text-[#072635] rounded-l-full">Problem/Diagnosis</th>
                        <th className="text-left p-2 text-[#072635]">Description</th>
                        <th className="text-left p-2 text-[#072635] rounded-r-full">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.length > 0 ? (
                        list.map((item, idx) => (
                        <tr key={idx} className="border-b last:border-0">
                            <td className="p-3 text-[#072635] text-[14px]">{item.name}</td>
                            <td className="p-2 text-[#072635] text-[14px]">{item.description}</td>
                            <td
                            className={`p-2 font-medium text-[14px] ${
                                item.status.toLowerCase().includes("critical")
                                ? "text-red-500"
                                : item.status.toLowerCase().includes("warning")
                                ? "text-yellow-500"
                                : "text-green-600"
                            }`}
                            >
                            {item.status}
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan={3} className="p-4 text-center text-gray-400">
                            No diagnostics available
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
          </div>
            <div>
                <PatientProfile />
                <LabResults />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
