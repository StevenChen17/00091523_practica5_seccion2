import React from "react";
import CientificoCard from "./components/CientificoCard";
import { cientificos } from "./data/cientificos";

function App() {
  return (
    <div style={styles.container}>
      <h2>Científicos Notables</h2>
      {cientificos.map((c, index) => (
        <CientificoCard
          key={index}
          nombre={c.nombre}
          profesion={c.profesion}
          premios={c.premios}
          descubrimiento={c.descubrimiento}
          imagen={c.imagen}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "40px",
  }
};

export default App;
