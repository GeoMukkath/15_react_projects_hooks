import React from "react";
import Tour from "./Tour";
const Tours = (props, removeTour) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {props.t.map((tour) => {
          return <Tour key={tour.id} details={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
