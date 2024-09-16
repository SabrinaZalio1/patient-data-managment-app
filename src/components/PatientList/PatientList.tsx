import { useEffect, useState } from 'react';
import { fetchPatients } from '../../services/patientsList.service';
import PatientCard from '../PatientCard/PatientCard'
import { IPatient } from '../../interfaces/patient.interface';
import './styles.css';

const PatientList = () => {
  // const [patients, setPatients] = useState<IPatient[]>([]);

  // useEffect(() => {
  //   const getPatients = async () => {
  //     const patientData = await fetchPatients();
  //     setPatients(patientData);
  //   };

  //  getPatients();
  // }, []);
  // const firstFivePatients = patients.slice(0, 5);
  
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [page, setPage] = useState(1); // current page
  const [isLoading, setIsLoading] = useState(false); // loader while fetching
  const [hasMore, setHasMore] = useState(true); // more data

  const getPatients = async () => {
    setIsLoading(true);
    const patientData = await fetchPatients(page); 
    setPatients((prevPatients) => [...prevPatients, ...patientData]);
    setIsLoading(false);

    if (patientData.length < 10) {
      setHasMore(false); 
    }
  };

  useEffect(() => {
    getPatients();
  }, [page]);


  const loadMorePatients = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  return (
    <div className='c-patient-list'>
      <h2 className='c-patients-list__title'>Patients</h2>
      
       <div className='c-patient-list__container'> 
     
      {patients ? (
      patients.map((patient:IPatient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))
    ) : (
      <p>No patients available</p>
    )} 
    </div>
    {isLoading && <span className="loader"></span>}
    
    {hasMore && !isLoading && (
        <button onClick={loadMorePatients} className="c-patients-list__btn btn">
          Load more
        </button>
        
      )}
    </div>
  );
};

export default PatientList;
