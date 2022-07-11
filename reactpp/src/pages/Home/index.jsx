import React, { useState} from 'react';
import './style.css';

import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent(e) {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }




  return (
       
    <div className='container'>
      <h1> Lista de Presenca.: {/*Nome: { studentName } */}</h1>



      <input 
        type="text"  
        placeholder="Nome" 
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={ handleAddStudent }>
        Adicionar
      </button>

      {
        students.map(student => <Card name={student.name} time={student.time}/>)
      }


      {/*<Card name="Ayanna de Jesus" time="15:10"/>
      <Card name="Kay de Jesus" time="15:10"/>*/}


    </div>

  )
}
  
