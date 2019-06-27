import React, { useState, useReducer } from 'react';

import People from './components/People';
import Form from './components/Form';
import NewestPerson from './components/NewPerson';

import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';

const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Doe"
    },
    {
      firstName: "Jane",
      lastName: "Doe"
    }
  ]);

  const [] = useReducer(peopleReducer, )

  const addPerson = (person) => {
    setPeople([...people, person]);
  }
  return (
    <div className="container">
      <div className="row">
        <Form addPerson={addPerson}/>
        <People people={people}/>
        <NewestPerson newestPerson={people[people.length - 1]} peopleCount={people.length}/>
      </div>
    </div>
  );
}

export default App;
