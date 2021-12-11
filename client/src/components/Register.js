import React from "react";
import { useHistory } from "react-router-dom";

function Register({
  gmail,
  setRegister,
  group,
  firstMember,
  secondMember,
  thirdMember,
  password,
  onChange,
  showAlert,
}) {
  const history = useHistory();
  const getData = async (e) => {
    e.preventDefault();
    const groupTrim = group.trim();
    const gmailTrim = gmail.trim();
    const firstMemberTrim = firstMember.trim();
    const secondMemberTrim = secondMember.trim();
    const thirdMemberTrim = thirdMember.trim();
    const passwordTrim = password.trim();
    const data = await fetch("/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group: groupTrim,
        gmail: gmailTrim,
        firstMember: firstMemberTrim,
        secondMember: secondMemberTrim,
        thirdMember: thirdMemberTrim,
        password: passwordTrim,
      }),
      credentials: "include",
    });
    const res = await data.json();
    showAlert(res);
    if (
      res ===
      "danger:This username has already been taken, please enter new username"
    ) {
      return setRegister({
        group: "",
        gmail: "",
        firstMember: "",
        secondMember: "",
        thirdMember: "",
        password: "",
      });
    }
    history.push("/");
    setRegister({
      group: "",
      gmail: "",
      firstMember: "",
      secondMember: "",
      thirdMember: "",
      password: "",
    });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "92vh" }}
    >
      <button
        className="btn text-muted text-center"
        style={{ position: "fixed", top: "10vh", left: "5vw" }}
        onClick={() => {
          history.push("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
      </button>{" "}
      <form
        onSubmit={getData}
        className="border border-muted p-5 rounded shadow"
        style={{ width: "500px" }}
      >
        <h1 className="text-center"> Register </h1>{" "}
        <div className="form-group mb-2">
          <label htmlFor="name"> Group Name </label>

          <input
            type="text"
            className="form-control"
            id="name"
            value={group}
            name="group"
            style={{ width: "100%" }}
            onChange={onChange}
            required
          />
        </div>{" "}
        <div className="form-group mb-2">
          <label htmlFor="gmail"> Gmail </label>

          <input
            type="email"
            className="form-control"
            id="gmail"
            value={gmail}
            name="gmail"
            style={{ width: "100%" }}
            onChange={onChange}
            required
          />
        </div>{" "}
        <div className="form-group mb-2"> </div>{" "}
        <div className="form-group mb-2">
          <label htmlFor="firstmember"> First Member </label>

          <input
            type="text"
            className="form-control"
            id="firstmember"
            value={firstMember}
            name="firstMember"
            style={{ width: "100%" }}
            onChange={onChange}
            required
          />
        </div>{" "}
        <div className="form-group mb-2">
          <label htmlFor="secondmember"> Second Member </label>
          <input
            type="text"
            className="form-control"
            id="secondmember"
            value={secondMember}
            name="secondMember"
            style={{ width: "100%" }}
            onChange={onChange}
          />{" "}
        </div>{" "}
        <div className="form-group mb-2">
          <label htmlFor="thirdmember"> Third Member </label>
          <input
            type="text"
            className="form-control"
            id="thirdmember"
            value={thirdMember}
            name="thirdMember"
            style={{ width: "100%" }}
            onChange={onChange}
          />{" "}
        </div>{" "}
        <div className="form-group ">
          <label htmlFor="password"> Password </label>

          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            name="password"
            style={{ width: "100%" }}
            onChange={onChange}
            required
          />
        </div>{" "}
        <div className="text-center">
          <button type="submit" className="btn btn-primary text-center mt-4">
            Register{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

export default Register;
