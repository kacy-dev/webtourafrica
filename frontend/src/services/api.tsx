// src/services/api.ts

const BASE_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

// Encode username:password → base64
const basicAuth = btoa("coalition:skills-test");

// Generic request function
async function request<T>(): Promise<T> {
  const res = await fetch(BASE_URL, {
    headers: {
      "Authorization": `Basic ${basicAuth}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json() as Promise<T>;
}

// Types (based on Postman response fields)
export interface Patient {
  name: string;
  gender: string;
  age: number;
  date_of_birth: string;
  profile_picture: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: Array<{
    year: number;
    month: string;
    blood_pressure: { systolic: { value: number }, diastolic: { value: number } };
    heart_rate: { value: number };
    respiratory_rate: { value: number };
    temperature: { value: number };
  }>;
  diagnostic_list: Array<{
    name: string;
    description: string;
    status: string;
  }>;
  lab_results: string[];
}

// Get only Jessica Taylor
export async function getJessica(): Promise<Patient | undefined> {
  const patients = await request<Patient[]>();
  return patients.find((p) => p.name === "Jessica Taylor");
}
