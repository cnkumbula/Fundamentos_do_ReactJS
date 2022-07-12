import React, { useState, useEffect} from 'react';
import './style.css';

import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar:''});

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


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/cnkumbula')
      const data = await response.json();

        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      
    }

    fetchData();

  },[]);

  return (
       
    <div className='container'>
      <header>
        <h1> Lista de Presenca.: </h1>
        <div>
          <strong>{ user.name }</strong>
          
          <img 
            src={user.avatar}
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
  
