import React, { Fragment, useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import icons
import { faStar } from "@fortawesome/free-regular-svg-icons/";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons/faStar";

export default () => {
  let arrStars = Array(5).fill(faStar);

  const [stars, setStars] = useState({ arr: arrStars, note: 0, icon: "" });

  const setIcon = note => {
    switch (note) {
      case 1:
        return "😭 I am sad of this note 😭";
      case 2:
        return "😢 I thought we were friends 😢";
      case 3:
        return "😌 We are on the right path 😌";
      case 4:
        return "🤗🤗 you are my best friend 🤗🤗";
      case 5:
        return "🤩🤩 We will go far together 🤩🤩";
      default:
        return null;
    }
  };

  /*
   Récupérer le numéro d'index de l'élément et remplir le array à selon le l'index.
*/
  const setRank = e => {
    let num = // récupérer l'index
      parseInt(e.target.dataset.pos, 0) || // svg élément
      parseInt(e.target.parentElement.dataset.pos, 0); // path élément;

    num !== stars.note &&
    arrStars.fill(fullStar, 0, num) && // Remplacer les étoiles vides par les étoiles pleines.
      setStars({ arr: arrStars, note: num, icon: setIcon(num) }); // modifier le state stars.
  };

  /*
  Reset des notes
*/
  const resRank = () => {
    stars.note !== 0 &&
      arrStars.fill(faStar, 5) &&
      setStars({ arr: arrStars, note: 0, icon: "" });
  };

  return (
    <Fragment>
      <section>
        <div className="icon_react">
          <h2>Give a note for React</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            width="100"
            alt="wikipedia react"
          />
        </div>
        {stars.arr.map((el, i) => (
          <FontAwesomeIcon
            key={i + 1}
            icon={el}
            size="2x"
            data-pos={i + 1}
            onClick={setRank}
          />
        ))}

        <div className="note">{stars.note}/5</div>

        <div className="message">
          <span role="img" aria-label="icon">
            {stars.icon}
          </span>
        </div>
      </section>

      <section>
        <div className="raz_stars">
          <button onClick={resRank}>RAZ</button>
        </div>
      </section>
    </Fragment>
  );
};
