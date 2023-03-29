import React from "react";

const LPD = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="row border-0">
        {new Array(8).fill(" ").map((items) => (
          <div class=" col-md-3 card margin-0 border-0 mt-2">
            <div class="card-body pt-5 border-0">
              <h5 class="card-title   border-0 text-start">
                Lead Program Design
              </h5>
            </div>
            <ul
              class="list-group list-group-flush text-start lead border-0"
              style={{ fontSize: "14px" }}
            >
              <li class="list-group-item border-0">
                {" "}
                <i class="bi bi-compass"> </i> Kathmandu,NP
              </li>
              <li class="list-group-item border-0">
                {" "}
                <i class="bi bi-clock"> </i> Full Time
              </li>
            </ul>
            <div class="card-body  justify-content-start d-flex  border-0">
              <button
                class=" btn btn-white text-dark fw-bold border-dark rounded "
                style={{ width: "80%" }}
              >
                Apply now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LPD;
