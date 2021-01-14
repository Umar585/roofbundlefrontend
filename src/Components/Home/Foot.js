import React from "react";
import * as RiIcon from "react-icons/ri";
import * as AiIcon from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Foot() {
  //get year
  const newDate = new Date();
  const currentDate = newDate.getFullYear();
  return (
    <div style={{ paddingTop: "40px" }}>
      <div className="list-inline text-center pb-3">
        <a
          href="https://www.instagram.com/roofbundle/"
          target="_blank"
          rel="noreferrer"
          className="m-3 h3"
        >
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <AiIcon.AiOutlineInstagram
              className="border rounded-circle p-1"
              style={{ backgroundColor: "#000" }}
            />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.facebook.com/Roofbundle/"
          target="_blank"
          rel="noreferrer"
          className="p-3 text-dark h3"
        >
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <RiIcon.RiFacebookFill
              className="border rounded-circle p-1"
              style={{ backgroundColor: "#000" }}
            />
          </IconContext.Provider>
        </a>
        <a
          href="https://twitter.com/roofbundle"
          target="_blank"
          rel="noreferrer"
          className="p-3 text-dark h3"
        >
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <AiIcon.AiOutlineTwitter
              className="border rounded-circle p-1"
              style={{ backgroundColor: "#000" }}
            />
          </IconContext.Provider>
        </a>
      </div>

      <div className="list-inline text-center pb-3">
        <hr style={{ maxWidth: "420px", backgroundColor: "#000" }} />
        <Link
          to="/terms"
          rel="noreferrer"
          className="p-3 list-inline-item"
          style={{ color: "#000" }}
        >
          Terms & Conditions
        </Link>
        <Link
          to="/privacy"
          rel="noreferrer"
          className="p-3 list-inline-item"
          style={{ color: "#000" }}
        >
          Privacy Policy
        </Link>
        <p className="list-inline-item" style={{ color: "#000" }}>
          Copyright&copy;Roofbundle Inc {currentDate}
        </p>
      </div>
    </div>
  );
}
