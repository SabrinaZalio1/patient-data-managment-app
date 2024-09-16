import './App.css'
import PatientList from './components/PatientList/PatientList'

function App() {

  return (
    <>
      <div className='app-container'>
        <h1 className='app-title'>Patient Data Management</h1>
        <PatientList/>
       </div>
    </>
  )
}

export default App
