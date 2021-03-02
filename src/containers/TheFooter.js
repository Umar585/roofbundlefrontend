import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <>
      <CFooter fixed={false}>
        <div className="w-100">
          <h6 className="text-white float-left">Roofbundle</h6>
          <h6 className="text-white float-right">Beta</h6>
        </div>
      </CFooter>
    </>
  );
};

export default React.memo(TheFooter);
