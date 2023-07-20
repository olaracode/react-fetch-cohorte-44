import React, { useState, useEffect } from "react";
const urlBase = "https://rickandmortyapi.com/api/character";

const Characters = () => {
  const [characterList, setCharacterList] = useState([]);

  // Funcion que busca y asigna los valores
  const getCharacterList = async () => {
    const response = await fetch(urlBase); // Pedimos la informacion
    const data = await response.json(); // la traducimos a js
    console.log(data.results); // {info: objeto{}, results: array[]}
    setCharacterList(data.results);
  };
  // useEffect(funcion flecha, un arreglo de dependencias)
  // useEffect(() => {}, [])
  useEffect(() => {
    // vamos a ejecutar las funciones asincronas que necesitemos al cargar
    getCharacterList();
  }, []);
  return (
    <>
      <h2>Personajes</h2>
      <div className="container">
        {characterList.map((character) => {
          return (
            <div className="card my-2" key={`character-${character.id}`}>
              <img src={character.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p>Genero: {character.gender}</p>
                <p>Genero: {character.species}</p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
