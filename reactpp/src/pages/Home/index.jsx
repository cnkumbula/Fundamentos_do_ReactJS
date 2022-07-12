import React, { useState, useEffect} from 'react';
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


  useEffect(() => {},[]);

  return (
       
    <div className='container'>
      <header>
        <h1> Lista de Presenca.: </h1>
        <div>
          <strong>Claudio Nkumbula</strong>
          
          <img 
            src="https://avatars.githubusercontent.com/u/25586893?v=4" 
            alt="profile picture"
          />

        </div> 
      </header>




      <input 
        type="text"  
        placeholder="Nome" 
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={ handleAddStudent }>
        Adicionar
      </button>

      {
        students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time}
        />
        ))
      }


      {/*<Card name="Ayanna de Jesus" time="15:10"/>
      <Card name="Kay de Jesus" time="15:10"/>*/}


    </div>

  )
}
  
