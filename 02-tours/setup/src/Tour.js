import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={props.details.image} alt={props.details.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.details.name}</h4>
          <h4 className="tour-price"> $ {props.details.price}</h4>
        </div>
        <p>
          {readMore
            ? props.details.info
            : `${props.details.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn">Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
