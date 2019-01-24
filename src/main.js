import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import icons
import { faStar } from "@fortawesome/free-regular-svg-icons/";

export default () => {
  const [stars, setStars] = useState({ fullStars: 0, unStars: 5 });

  return (
    <section>
      <h2>Give a note for React</h2>
      {[...Array(stars.unStars)].map(i => (
        <FontAwesomeIcon key={i} icon={faStar} size="2x" />
      ))}
    </section>
  );
};
