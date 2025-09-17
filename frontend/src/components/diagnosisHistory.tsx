import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { getJessica } from "../services/api";
import type { Patient } from "../services/api";

type ChartPoint = {
  month: string;
  systolic: number;
  diastolic: number;
};

export default function DiagnosisHistory() {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [latest, setLatest] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const patient: Patient | undefined = await getJessica();
        if (patient?.diagnosis_history) {
          const transformed = patient.diagnosis_history.map((item: any) => ({
            month: item.month,
            systolic: item.blood_pressure?.systolic?.value ?? 0,
            diastolic: item.blood_pressure?.diastolic?.value ?? 0,
          }));
          setData(transformed);
          setLatest(patient.diagnosis_history[patient.diagnosis_history.length - 1]);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="bg-white rounded-2xl">
      <h2 className="text-lg font-bold text-[#072635] mb-4">Diagnosis History</h2>
      <div className="flex items-start bg-[#F4F0FE] gap-3 p-3 rounded-xl">
        <div className="flex-1 bg-[#F4F0FE]">
          <p className="text-gray-500 text-sm mb-4 flex justify-between ">
            <span className="text-black text-bold">Blood Pressure</span>
            <span>Last 6 months</span>
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="1 1" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[30, 50]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#ec4899"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#6366f1"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        
        {latest && (
          <div className="w-60 bg-[#F4F0FE] rounded-xl p-4">
            
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Systolic</p>
                <p className="text-lg font-bold text-[#072635]">
                  {latest.blood_pressure.systolic.value}
                </p>
                <p className="text-xs text-gray-400">
                  {latest.blood_pressure.systolic.levels}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Diastolic</p>
                <p className="text-lg font-bold text-[#072635]">
                  {latest.blood_pressure.diastolic.value}
                </p>
                <p className="text-xs text-gray-400">
                  {latest.blood_pressure.diastolic.levels}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
