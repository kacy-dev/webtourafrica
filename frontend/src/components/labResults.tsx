import React, { useEffect, useState } from "react";
import { getJessica } from "../services/api";
import type { Patient } from "../services/api";
import { Download } from "lucide-react"; 

export default function LabResults() {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const patient: Patient | undefined = await getJessica();
        if (patient?.lab_results) {
          setResults(patient.lab_results);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-4 mt-6 max-h-[207px] overflow-y-auto">
      <h2 className="font-semibold text-lg text-[#072635]">Lab Results</h2>
      <ul className="space-y-1">
        {results.length > 0 ? (
          results.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center p-2 rounded hover:bg-gray-50"
            >
              <span className="text-[#072635] text-sm">{item}</span>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Download size={16} className="text-gray-600" />
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No lab results available</p>
        )}
      </ul>
    </div>
  );
}
