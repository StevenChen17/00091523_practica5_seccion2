import React from "react";

function CientificoCard({ nombre, profesion, premios, descubrimiento, imagen }) {
  return (
    <div style={styles.card}>
      <h3><b>{nombre}</b></h3>
      <img src={imagen} alt={nombre} style={styles.img} />
      <ul>
        <li><b>Profesión:</b> {profesion}</li>
        <li><b>Premios:</b> {premios}</li>
        <li><b>Descubrió:</b> {descubrimiento}</li>
      </ul>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "16px",
    marginBottom: "16px",
    maxWidth: "500px",
  },
  img: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "cover"
  }
};

export default CientificoCard;
