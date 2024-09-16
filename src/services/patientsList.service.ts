import axios from "axios";
import { IPatient } from "../interfaces/patient.interface";

export const fetchPatients = async (page: number): Promise<IPatient[]> => {
  try {
    const response = await axios.get<IPatient[]>(
      `https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`,
      {
        params: { page, limit: 10 },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
};
