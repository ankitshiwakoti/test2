import React, { useEffect, useState } from "react";
import axios from "axios";
import pic1 from "../images/iccc.png";
import { HTMLReactParserOptions } from "html-react-parser";
import HTMLReactParser from "html-react-parser";
import parse from "html-react-parser";

const Cdr = () => {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    const api = axios
      .get("https://cdrforengineer.cdrsites.rocks/api/landing?populate=deep")
      .then((response) => {
        setPost(response.data.data.attributes.trackRecord);
      });
  });
  //   const data = api.data.data.attributes;
  const html = "<div>Example HTML string</div>";

  return (
    <div className="container-fluid">
      <h2>Expert CDR Report Writing Service in Australia</h2>
      <div className="row justify-content-center  text-align-left mt-4 ">
        {post?.map((items) => (
          <>
            <div
              className=" cdd col-lg-2 col-md-2 col-sm-4 mt-1 ms-1 "
              style={{ width: "200px" }}
              id={items.id}
            >
              <img
                src={items.image.data.attributes.url}
                className="rounded-circle shadow-4-strong mt-2 "
                alt="..."
              />
            </div>
            <div className=" cdd col-lg-4 col-md-3 col-sm-6 mt-1  ">
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>

                <p className="card-text mt-2">{parse(items.paragraph)}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Cdr;
// const Axiouss = () => {
//     const api = axios
//       .get("https://cdrforengineer.cdrsites.rocks/api/landing?populate=deep")
//       .then((Res) => {
//         //   const dats = Res.json();
/* {
        {new Array(6).fill("").map((items) => ( */
//         console.log(Res.data.data.attributes.trackRecord);

//         //   console.log(Res.JSON().data.attributes);
//       });
