import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <>
      <CFooter fixed={false}>
        <h6 className="text-white">Roofbundle</h6>
        <h6
          className="text-white"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "10px",
            paddingRight: "15px",
            marginRight: "auto",
            zIndex: "99",
          }}
        >
          Beta
        </h6>
      </CFooter>
    </>
  );
};

export default React.memo(TheFooter);
