import React from "react";
import pic1 from "../images/img1.jpg";
import NFT from "./NFT";
// C:\Users\ankit\Desktop\React-BS\react-boot\src\img1.jpg
const Test = (props) => {
  return (
    <div className="container my-5 ">
      <div class="row justify-content-center">
        <div class="col-lg-2  col-md-4 col-sm-6">
          <div class="card border-white ">
            <img
              src={pic1}
              alt="images ho "
              className="bject-fit-contain border rounded"
            />
            <div class="card-header">Heading 1</div>
            <div class="card-body">
              <p class="card-text text-info">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card border-white">
            <img
              src={pic1}
              alt="images ho "
              className="object-fit-cover border rounded"
            />
            <div class="card-header">Heading 2</div>
            <div class="card-body">
              <p class="card-text text-info">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card border-white">
            <img
              src={pic1}
              alt="images ho "
              className="object-fit-cover border rounded"
            />
            <div class="card-header">Heading 2</div>
            <div class="card-body">
              <p class="card-text text-info">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card border-white">
            <img
              src={pic1}
              alt="images ho "
              className="object-fit-cover border rounded"
            />
            <div class="card-header">Heading 2</div>
            <div class="card-body">
              <p class="card-text text-info">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6">
          <div class="card border-white">
            <img
              src={pic1}
              alt="images ho "
              className="object-fit-cover border rounded"
            />
            <div class="card-header">Heading 2</div>
            <div class="card-body">
              <p class="card-text text-info">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 col-sm-6 ">
          <div class="card border-white">
            <img
              src={pic1}
              alt="images ho "
              className="object-fit-none border rounded"
            />
            <div class="card-header padding-0 nopadding">Heading 2</div>
            <div class="card-body">
              <p class="card-text text-info">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="row  align-items-center ">
        <div className="bg-primary    col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
          Hello world bro
        </div>
        <div className=" bg-danger  col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 ">
          Hello world bro
        </div>
        <div className="bg-warning  col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4  ">
          Hello world bro
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Test;
