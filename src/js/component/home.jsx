import React from "react";
import Characters from "./Characters.jsx";
import Planets from "./Planets.jsx";
import Episodes from "./Episodes.jsx";
// HOOK -> useEffect() -> al cargar el componente
// Efectos secundarios - cosas que no impiden la ejecucion del resto
// Peticiones asincronas

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Async React!</h1>
      <p>
        <img src={rigoImage} />
      </p>

      <Characters />
      <Planets />
      <Episodes />
    </div>
  );
};

export default Home;
