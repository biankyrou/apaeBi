import React from "react";
import "./Card.css";

function Card({nome, descricao, email, destaque}) {
  const cardClasses = destaque ? "CardDestaque" : "Card";
  return (
    <div className={cardClasses}> 
      <h3 className="nome">{nome}</h3>
      <p className="descricao">{descricao}</p>
      <button className="email" onClick={() => window.location.href = `mailto:${email}`} id="email">Enviar E-mail</button>
    </div>
  );
}

export default Card;

