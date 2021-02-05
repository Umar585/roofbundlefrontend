import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <h6 className="text-center text-white">Roofbundle</h6>
    </CFooter>
  );
};

export default React.memo(TheFooter);
