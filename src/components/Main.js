import React from "react";
import { useState } from "react";
import Cdrsample1 from "./Cdrsample1";
const Main = ({ data }) => {
  const [active, setActive] = useState(data[0]?.title);
  console.log(active);
  return (
    <div className="container">
      <div className="row  mt-5">
        {data?.map((items) => (
          <div className="col-lg-4 p-0" key={items.id}>
            <button
              className={`${
                active === items?.title
                  ? "text-white bg-secondary fw-bold underline btn-lg w-100 border-0"
                  : "text-black  bg-light bg-gradient btn-lg w-100 border-0"
              }`}
              onClick={() => setActive(items.title)}
            >
              {items?.title}
            </button>
          </div>
        ))}
      </div>
      <div className="row bg-light bg-gradient  p-0 ">
        <p className="text-start fs-5 mt-3">
          {active === data[0]?.title && <p>{data[0].heading}</p>}
          {active === data[1]?.title && <p>{data[1].heading}</p>}
          {active === data[2]?.title && <p>{data[2].heading}</p>}
        </p>
        <p className="text-start fs-5">
          {active === data[0]?.title && <p>{data[0].paragraph}</p>}
          {active === data[1]?.title && <p>{data[1].paragraph}</p>}
          {active === data[2]?.title && <p>{data[2].paragraph}</p>}
        </p>

        <div className=" p-0 bg-light bg-gradient ">
          <ul class="list-group bg-light bg-gradient p-0 ms-4 ">
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-1"> </i> A list item
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-1"> </i> A list item
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-1"> </i> A list item
            </li>
            <li class="list-group-item  d-flex  bg-light bg-gradient border-0">
              <i class="bi bi-check-circle-fill me-1"> </i> A list item
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
