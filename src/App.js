import React, { useReducer } from 'react';

import People from './components/People';
import Form from './components/Form';
import NewestPerson from './components/NewPerson';

import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';
import { ADD_PERSON } from './context/types'

const App = () => {
  // const [people, setPeople] = useState([
  //   {
  //     firstName: "John",
  //     lastName: "Doe"
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe"
  //   }
  // ]);

  const initialState = {
    people: [
          {
            firstName: "John",
            lastName: "Doe"
          },
          {
            firstName: "Jane",
            lastName: "Doe"
          }
    ]
  }

  const [state, dispatch] = useReducer(peopleReducer, initialState)

  const addPerson = (person) => {
    // setPeople([...people, person]);
    dispatch({
      type: ADD_PERSON,
      payload: person
    })

  }
  return (
    <PeopleContext.Provider 
      value={{
        people: state.people,
        addPerson
      }}>
        <div className="container">
          <div className="row">
            <Form />
            <People />
            <NewestPerson />
          </div>
        </div>
      </PeopleContext.Provider>
  );
}

export default App;
