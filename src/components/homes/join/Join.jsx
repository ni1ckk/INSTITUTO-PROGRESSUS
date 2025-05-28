import React from "react";
import { Link } from "react-router-dom";
export default function Join() {
  return (
    <section className="layout-pt-md layout-pb-md bg-blue-7">
      <div className="container">
        <div className="row y-gap-20 justify-between items-center">
          <div className="col-xl-4 col-lg-5">
            <h2 className="text-30 lh-15 text-white">
              Junte-se a mais de 
              <span className="text-light-2"> 200 mil alunos</span>
            </h2>
          </div>

          <div className="col-auto">
            <Link to="#" className="button -md -light-2 text-dark-1">
              Comece a aprender agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
