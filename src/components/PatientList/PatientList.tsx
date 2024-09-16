import { useEffect, useState } from "react";
import { fetchPatients } from "../../services/patientsList.service";
import PatientCard from "../PatientCard/PatientCard";
import { IPatient, IPatientList } from "../../interfaces/patient.interface";
import "./styles.css";

const PatientList = ({ showToast }: IPatientList) => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

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
    <div className="c-patient-list">
      <h2 className="c-patients-list__title">Patients</h2>

      <div className="c-patient-list__container">
        {patients ? (
          patients.map((patient: IPatient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              showToast={showToast}
            />
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
