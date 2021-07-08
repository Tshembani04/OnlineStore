import React from "react";
import { withRouter } from "react-router-dom";
import Nike from "../../assets/Nike.jpg";
import "./MainSection.Styles.scss";

function MainSection({ history }) {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={Nike} alt="studio sneaker" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for Fashion. Crafted for Drip.</h2>
          <p>
            Simply put, the Nike Jordan 1 is the sneaker that started it all.
            Michael Jordan's first signature model was released in 1985, and is
            the Air Jordan model that sports a Nike Swoosh. This altered "Moto"
            version has a design inspired by Jordan's love for automobile racing
            and motorcycles. They have adjustable straps, circular 23 logo,
            stitching/suede accents, and an aggressive tread on the outsole.
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product1")}
          >
            SNEAKER BAG
          </button>
        </div>
      </div>
    </div>
  );
}
export default withRouter(MainSection);


