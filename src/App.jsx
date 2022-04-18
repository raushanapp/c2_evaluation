import { useState } from 'react'
import './App.css'

import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [showStudent, setStudent] = useState(true);
  const [showAdd, setAdd] =useState(false)

  return (
    <div className="App">
      <button className="togglebtn" onClick= {()=>setStudent(!showStudent)|| setAdd(!showAdd) } >{showStudent ? "Go to the student list" : "  Add new Student" }</button>
     {showStudent ? <AddStudent/> : showAdd}
     {showAdd ?  <ShowStudents/> : showStudent}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  )
}

export default App
