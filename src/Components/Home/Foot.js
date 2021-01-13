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
            <AiIcon.AiOutlineInstagram className="border rounded-circle bg-dark p-1" />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.facebook.com/Roofbundle/"
          target="_blank"
          rel="noreferrer"
          className="p-3 text-dark h3"
        >
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <RiIcon.RiFacebookFill className="border rounded-circle bg-dark p-1" />
          </IconContext.Provider>
        </a>
        <a
          href="https://twitter.com/roofbundle"
          target="_blank"
          rel="noreferrer"
          className="p-3 text-dark h3"
        >
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <AiIcon.AiOutlineTwitter className="border rounded-circle bg-dark p-1" />
          </IconContext.Provider>
        </a>
      </div>

      <div className="list-inline text-center pb-3">
        <hr style={{ maxWidth: "420px" }} className="bg-dark" />
        <Link
          to="/terms"
          rel="noreferrer"
          className="p-3 text-dark list-inline-item"
        >
          Terms & Conditions
        </Link>
        <Link
          to="/privacy"
          rel="noreferrer"
          className="p-3 text-dark list-inline-item"
        >
          Privacy Policy
        </Link>
        <p className="text-dark list-inline-item">
          Copyright&copy;Roofbundle Inc {currentDate}
        </p>
      </div>
    </div>
  );
}
