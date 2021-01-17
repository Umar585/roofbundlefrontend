import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  const newDate = new Date();
  const currentDate = newDate.getFullYear();

  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Roofbundle Inc
        </a>
        <span className="ml-1">&copy; {currentDate} creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreUI for React
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
