import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then(response => response.json())
      .then(data => setPlanets(data.results))
  }, [])

  return (
    <>
      <Header title="
      Star Wars compare-a-planet"/>



      <main className="input">
      
        <select className="menu" name="cars" id="cars">
          {planets.map(planet => (<option value={planet.name}>{planet.name}</option>))}
        </select>
        <select className="menu" name="cars" id="cars">
          {planets.map(planet => (<option value={planet.name}>{planet.name}</option>))}
        </select>
      </main>
    </>
  );
}



export default App;