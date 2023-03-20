import React from "react";
import pic1 from "../images/img1.jpg";
import NFT from "./NFT";
// C:\Users\ankit\Desktop\React-BS\react-boot\src\img1.jpg
const Test = ({ data }) => {
  return (
    <div className="container my-5 ">
      <div className="row">
        {data?.map((items) => (
          <div class="col-lg-2  col-md-4 col-sm-6 mt-5 " id={items.id}>
            <div class="card border-white ">
              <img
                src={pic1}
                alt="images ho "
                className="object-fit-contain border rounded"
              />
              <div class="card-header">{items.heading}</div>
              <div class="card-body">
                <p class="card-text text-info">{items.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
