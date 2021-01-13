import React, { useState } from "react";

export default function SubForm() {
  const [form, setForm] = useState({ email: "" });
  const [errmsg, setErrMsg] = useState(false);
  const [msg, setMsg] = useState("");

  const handleEmailInput = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const subscribe = (e) => {
    e.preventDefault();

    if (form.email === "") {
      setErrMsg(false);
      setMsg("Email Required");
    }

    if (form.email) {
      fetch(`/api/mailchimp?email=${form.email}`)
        .then((res) => {
          //res.json();
          if (res.status === 400) {
            setErrMsg(false);
            setMsg("Already Subscribed");
          } else {
            setErrMsg(true);
            setMsg("Subscribed");
            setForm({ ...form, email: "" });
          }
        })
        .catch((err) => {
          setErrMsg(false);
          setMsg("Try Again");
        });
      setTimeout(() => setMsg(""), 4000);
    }
  };

  return (
    <div>
      <form onSubmit={subscribe}>
        <div className="form-group" style={{ maxWidth: "400px" }}>
          <label htmlFor="email" className="pr-2">
            Your Email
          </label>
          {errmsg ? (
            <span className="text-success">{msg}</span>
          ) : (
            <span className="text-danger">{msg}</span>
          )}
          <input
            type="email"
            placeholder="Example@email.com"
            className="form-control  bg-dark text-white"
            value={form.email}
            onChange={handleEmailInput}
          />
          <div>
            <input
              type="submit"
              value="Notify Me"
              className="btn btn-danger mt-2"
              style={{ backgroundColor: "E60029" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
