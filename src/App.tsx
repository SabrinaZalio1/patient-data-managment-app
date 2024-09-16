import { useState } from "react";
import "./App.css";
import PatientList from "./components/PatientList/PatientList";
import NotificationToast from "./components/NotificationToast/NotificationToast";

function App() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const showToast = () => {
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 5000);
  };
  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Patient Data Management</h1>
        <PatientList showToast={showToast} />
        {isToastVisible && (
          <NotificationToast text="Changes saved successfully!" />
        )}
      </div>
    </>
  );
}

export default App;
