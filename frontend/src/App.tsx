import { useState } from "react";
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
import PatientProfile from "./components/patientProfile";

function App() {
  const bloodPressureData = [
    { month: "Oct 2023", systolic: 120, diastolic: 80 },
    { month: "Nov 2023", systolic: 135, diastolic: 85 },
    { month: "Dec 2023", systolic: 150, diastolic: 90 },
    { month: "Jan 2024", systolic: 140, diastolic: 82 },
    { month: "Feb 2024", systolic: 155, diastolic: 75 },
    { month: "Mar 2024", systolic: 160, diastolic: 78 },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 w-full py-4 px-4">

         

          <TopBar />
        
        <div className="flex">

          <PatientSidebar />

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto">
            {/* Diagnosis History */}
            <section className="bg-white rounded-2xl shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg text-black">Diagnosis History</h2>
                <select className="text-sm border rounded-lg px-2 py-1">
                  <option>Last 6 months</option>
                  <option>Last 12 months</option>
                </select>
              </div>

              {/* Chart */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={bloodPressureData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="systolic"
                      stroke="#EC4899"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="diastolic"
                      stroke="#6366F1"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h3 className="text-gray-500">Respiratory Rate</h3>
                <p className="text-2xl font-bold">20 bpm</p>
                <span className="text-sm text-green-500">Normal</span>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h3 className="text-gray-500">Temperature</h3>
                <p className="text-2xl font-bold">98.6°F</p>
                <span className="text-sm text-green-500">Normal</span>
              </div>
              <div className="bg-white rounded-2xl shadow p-6 text-center">
                <h3 className="text-gray-500">Heart Rate</h3>
                <p className="text-2xl font-bold">78 bpm</p>
                <span className="text-sm text-red-500">Lower than average</span>
              </div>
            </section>

            {/* Diagnostic List */}
            {/* <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4">Diagnostic List</h2>
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2">Problem/Diagnosis</th>
                <th className="text-left p-2">Description</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Blood Pressure</td>
                <td className="p-2">High Systolic</td>
                <td className="p-2 text-red-500">Critical</td>
              </tr>
              <tr>
                <td className="p-2">Heart Rate</td>
                <td className="p-2">Below Average</td>
                <td className="p-2 text-yellow-500">Warning</td>
              </tr>
            </tbody>
          </table>
        </section> */}
          </main>

          <PatientProfile />
        </div>

        {/* Right Sidebar - Profile */}
        {/* <aside className="w-full md:w-1/4 bg-white border-l p-6">
        <div className="text-center">
          <img
            src="/avatar.jpg"
            alt="patient"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Jessica Taylor</h2>
          <p className="text-sm text-gray-500">Female, 28</p>
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <p>
            <span className="font-medium">DOB:</span> Aug 23, 1996
          </p>
          <p>
            <span className="font-medium">Gender:</span> Female
          </p>
          <p>
            <span className="font-medium">Contact:</span> (415) 555-1234
          </p>
          <p>
            <span className="font-medium">Emergency:</span> (415) 555-5678
          </p>
          <p>
            <span className="font-medium">Insurance:</span> Sunrise Health Assurance
          </p>
        </div>

        <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg">
          Show All Information
        </button>
      </aside> */}
      </div>
    </>
  );
}

export default App;
