import React, { useEffect, Fragment } from "react";
import { withRouter, useHistory } from "react-router-dom";

function ScrollToTop({ children }) {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
