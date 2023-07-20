import React, { useState, useEffect } from "react";

const apiLink = "https://rickandmortyapi.com/api/episode";

const Episodes = () => {
  const [listEpisodes, setListEpisodes] = useState([]);

  const getEpisodes = async () => {
    const response = await fetch(apiLink);
    const data = await response.json();
    setListEpisodes(data.results);
  };

  useEffect(() => {
    getEpisodes();
  }, []);
  return (
    <>
      <h2>Episodios</h2>
      <div className="container">
        {listEpisodes.map((episode) => {
          return (
            <div className="card" key={`episode-${episode.id}`}>
              <div className="card-body">
                <h3>{episode.name}</h3>
                <p>Lanzado: {episode.air_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Episodes;
