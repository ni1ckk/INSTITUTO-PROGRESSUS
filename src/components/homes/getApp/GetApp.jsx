import React from "react";

import { Link } from "react-router-dom";
export default function GetApp() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-3">
      <div className="container">
        <div className="row y-gap-20 items-center">
          <div className="col-xl-7 col-lg-7">
            <div
              className="app-image"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                src="/assets/img/app/tablet-cell.png"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <div className="app-content">
              <h2
                className="app-content__title"
                data-aos="fade-up"
                data-aos-duration={500}
              >
                Aprenda em
                <br /> <span>qualquer lugar</span>
              </h2>
              <p
                className="app-content__text"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                Veja as aulas pelo app INSTITUTO PROGRESSUS. Assista ou faça o download 
                para estudar no ônibus, avião, carro ou onde e quando você quiser!
              </p>
              <div className="app-content__buttons">
                <Link to="#">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/apple.png"
                    alt="button"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  />
                </Link>
                <Link to="#">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/assets/img/app/buttons/google.png"
                    alt="button"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
