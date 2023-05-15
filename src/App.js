import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './Characters';
import styled from 'styled-components';

const StyledApp = styled.div `
.headerDiv {
  display: flex;
  justify-content: center;
}
`


const App = () => {
  const [characterData, setCharacterData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(result => {
        setCharacterData(result.data)
      })
      .catch(err => {
        console.error(err);
      })
  }, [])







  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className='appContainer'>
      <div className='headerDiv'>
      <h1 className="header">Star Wars Characters</h1>
      </div>
      {characterData.map((character, index) => {
        return <Characters key={index} data={character} />
      })
      }
    
    </StyledApp>
  );
}

export default App;
