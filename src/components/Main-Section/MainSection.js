import React from "react";
import { withRouter } from "react-router-dom";
import Herss from "../../assets/herss.jpg";
import "./MainSection.Styles.scss";

function MainSection({ history }) {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={Herss} alt="studio sneaker" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for Fashion. Crafted for Drip.</h2>
          <p>
            We're more than just clothing. More than just a business. But what you wear is our business.
Cancelwear Or be cancelled.
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


