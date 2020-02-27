import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
        //after getting the animals we will be setting the animals which is the
        //function which changes the state 
      setAnimals(animalsFromAPI)
    });
  };
  const deleteAnimalFunction = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };
  // got the animals from the API on the component's first render, actually happens after the return
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  //this is returning JSX based on the current array, array must be populated for it to actually return something to the DOM
  //maps over the properties of animals 
  //deleteAnimal is a prop that is equal to the deleteAnimalFunction
//<> </> is open and close react fragment
  return (
    <>
    <section className="section-content">
      <button type="button"
          className="btn"
          onClick={() => {props.history.push("/animals/new")}}>
          Admit Animal
      </button>
    </section>
    <div className="container-cards">
    {animals.map(animal => <AnimalCard key={animal.id} animal={animal} deleteAnimal={deleteAnimalFunction} /> )}
  </div>
  </>
  );
};
export default AnimalList