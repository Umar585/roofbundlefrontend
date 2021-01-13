import React, { useEffect, useState } from "react";

export default function Test() {
  const [initstate, setInitState] = useState([]);

  useEffect(() => {
    fetch("/api/mailchimp/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setInitState(jsonRes.names));
  }, []);

  return (
    <div>
      {initstate.length > 0 &&
        initstate.map((name, index) => {
          return <h1 key={index}>{name}</h1>;
        })}
      <h1>Test Happening in react front end</h1>
    </div>
  );
}
