import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  const newDate = new Date();
  const currentDate = newDate.getFullYear();

  return (
    <CFooter fixed={false}>
      <div>
        Copyright&copy;
        <a
          href="https://coreui.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#e60029" }}
        >
          Roofbundle Inc
        </a>
        <span className="ml-1"> {currentDate}</span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
