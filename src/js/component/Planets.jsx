import React, { useState, useEffect } from "react";

const apiLink = "https://rickandmortyapi.com/api/location";

const Planets = () => {
  const [listLocations, setListLocations] = useState([]);

  const getLocations = async () => {
    const response = await fetch(apiLink); // buscamos en la api
    const data = await response.json(); // JSON: JavaScript Object Notation
    console.log("info: ", data.info); // meta data
    console.log("locaciones: ", data.results); // los resultados
    setListLocations(data.results);
  };
  // useEffect(funcionFlecha, arreglo)
  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <h2>Planetas</h2>
      <div className="container">
        {listLocations.map((location) => {
          return (
            <div className="card" key={`location-${location.id}`}>
              <div className="card-body">
                <h3>
                  {/* Nombre de la locacion */}
                  {location.name}
                </h3>
                <p>Tipo: {location.type}</p>
                <p>Residentes: {location.residents.length}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Planets;
