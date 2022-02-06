import React from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register({
  gmailFirstMember,
  gmailSecondMember,
  collegeFirstMember,
  collegeSecondMember,
  phoneFirstMember,
  phoneSecondMember,
  setRegister,
  firstMemberInfo,
  secondMemberInfo,
  departmentOfFirstMember,
  departmentOfSecondMember,
  yearOfFirstMember,
  yearOfSecondMember,
  group,
  firstMember,
  secondMember,
  password,
  onChange,
  showAlert,
}) {
  const history = useHistory();
  const getData = async (e) => {
    e.preventDefault();
    const groupTrim = group.trim();
    const gmailFirstMemberTrim = gmailFirstMember.trim();
    const gmailSecondMemberTrim = gmailSecondMember.trim();
    const firstMemberInfoTrim = firstMemberInfo.trim();
    const secondMemberInfoTrim = secondMemberInfo.trim();
    const departmentOfSecondMemberTrim = departmentOfSecondMember.trim();
    const departmentOfFirstMemberTrim = departmentOfFirstMember.trim();
    const yearOfFirstMemberTrim = yearOfFirstMember.trim();
    const yearOfSecondMemberTrim = yearOfSecondMember.trim();
    const collegeFirstMemberTrim = collegeFirstMember.trim();
    const collegeSecondMemberTrim = collegeSecondMember.trim();
    const phoneFirstMemberTrim = phoneFirstMember.trim();
    const phoneSecondMemberTrim = phoneSecondMember.trim();
    const firstMemberTrim = firstMember.trim().toLowerCase();
    const secondMemberTrim = secondMember.trim().toLowerCase();
    
    const passwordTrim = password.trim();

    const data = await fetch("/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group: groupTrim,
        gmailFirstMember: gmailFirstMemberTrim,
        gmailSecondMember: gmailSecondMemberTrim,
        firstMemberInfo: firstMemberInfoTrim,
        secondMemberInfo: secondMemberInfoTrim,
        departmentOfSecondMember: departmentOfSecondMemberTrim,
        departmentOfFirstMember: departmentOfFirstMemberTrim,
        yearOfFirstMember: yearOfFirstMemberTrim,
        yearOfSecondMember: yearOfSecondMemberTrim,
        collegeFirstMember: collegeFirstMemberTrim,
        collegeSecondMember: collegeSecondMemberTrim,
        phoneFirstMember: phoneFirstMemberTrim,
        phoneSecondMember: phoneSecondMemberTrim,
        firstMember: firstMemberTrim,
        secondMember: secondMemberTrim,
        password: passwordTrim,
      }),
      credentials: "include",
    });
    const res = await data.json();
    showAlert(res);
    if (
      res ===
      "#E52B50:white:This TeamName has already been taken, please enter new TeamName"
    ) {
      return setRegister({
        group: "",
        gmailFirstMember: "",
        firstMemberInfo: "",
        collegeFirstMember: "",
        phoneFirstMember: "",
        departmentOfFirstMember: "",
        yearOfFirstMember: "",
        departmentOfSecondMember: "",
        yearOfSecondMember: "",
        firstMember: "",
        secondMember: "",
        collegeSecondMember: "",
        gmailSecondMember: "",
        secondMemberInfo: "",
        phoneSecondMember: "",
        password: "",
      });
    }
    history.push("/");
    setRegister({
      group: "",
      gmailFirstMember: "",
      gmailSecondMember: "",
      firstMemberInfo: "",
      secondMemberInfo: "",
      departmentOfSecondMember: "",
      departmentOfFirstMember: "",
      yearOfFirstMember: "",
      yearOfSecondMember: "",
      collegeFirstMember: "",
      collegeSecondMember: "",
      phoneFirstMember: "",
      phoneSecondMember: "",
      firstMember: "",
      secondMember: "",
      password: "",
    });
  };
  return (
    <div className="fill-window" style={{ overflowY: "scroll" }}>
      <button
        className="btn text-light text-center"
        style={{ position: "absolute", top: "2vh", left: "2vw", zIndex: "1" }}
        onClick={() => {
          history.push("/");
        }}
      >
        <i
          className="bi bi-arrow-left"
          style={{ zIndex: "100", fontSize: "40px" }}
        ></i>{" "}
      </button>{" "}
      <div className="container-fluid  d-flex align-items-center justify-content-center mt-3">
        <div
          id="card"
          className="container col-md-12 col-sm-12 col-12 mt-2 mb-2 py-4 px-5"
          style={{ maxWidth: "580px", maxHeight: "600px", overflowY: "scroll" }}
        >
          <p className="text-light text-center form-banner pt-2">
            CTF Registeration Form{" "}
          </p>{" "}
          <form id="registeredForm" onSubmit={getData}>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="group"
                value={group}
                onChange={onChange}
                required
                placeholder="Group name"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                name="gmailFirstMember"
                value={gmailFirstMember}
                onChange={onChange}
                required
                placeholder="Email id of first Member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="firstMember"
                value={firstMember}
                onChange={onChange}
                required
                placeholder="Name of first member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="collegeFirstMember"
                value={collegeFirstMember}
                onChange={onChange}
                required
                placeholder="college of first member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="departmentOfFirstMember"
                value={departmentOfFirstMember}
                onChange={onChange}
                placeholder="Department of first member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="yearOfFirstMember"
                value={yearOfFirstMember}
                onChange={onChange}
                placeholder="year of first member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="firstMemberInfo"
                value={firstMemberInfo}
                onChange={onChange}
                required
                placeholder="class-div-roll no of first member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="phoneFirstMember"
                value={phoneFirstMember}
                onChange={onChange}
                required
                placeholder="phone no. of first member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                name="gmailSecondMember"
                value={gmailSecondMember}
                onChange={onChange}
                placeholder="Email id of second member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="secondMember"
                value={secondMember}
                onChange={onChange}
                placeholder="Name of second member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="collegeSecondMember"
                value={collegeSecondMember}
                onChange={onChange}
                placeholder="college of second member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="departmentOfSecondMember"
                value={departmentOfSecondMember}
                onChange={onChange}
                placeholder="Department of second member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="yearOfSecondMember"
                value={yearOfSecondMember}
                onChange={onChange}
                placeholder="Year of second member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="secondMemberInfo"
                value={secondMemberInfo}
                onChange={onChange}
                placeholder="class-div-roll no of second member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="phoneSecondMember"
                value={phoneSecondMember}
                onChange={onChange}
                placeholder="phone no. of second member"
              />
            </div>{" "}
           
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                required
              />
            </div>{" "}
            <div className="form-group text-center mt-3">
              <button type="submit" className="close px-4 buttons">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
