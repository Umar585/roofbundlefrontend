import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <h6 className="text-white">Roofbundle</h6>
      <h6 className="text-right text-white">Beta</h6>
    </CFooter>
  );
};

export default React.memo(TheFooter);
