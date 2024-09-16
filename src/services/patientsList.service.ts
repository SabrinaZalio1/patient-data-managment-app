// import axios from 'axios';
// import { IPatient } from '../interfaces/patient.interface';

// export const fetchPatients = async (): Promise<IPatient[]> => {
//   try {
//     const response = await axios.get<IPatient[]>('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users');

//     const data = response.data;

//     return data;
//   } catch (error) {
//     console.error('Error fetching patients:', error);
//     return [];
//   }
// };
import axios from 'axios';
import { IPatient } from '../interfaces/patient.interface';

export const fetchPatients = async (page: number): Promise<IPatient[]> => {
  try {
    const response = await axios.get<IPatient[]>(`https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`, {
      params: { page, limit: 10 }, // Fetch 10 patients at a time
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
};
