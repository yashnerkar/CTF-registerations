import React from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register({
  gmailFirstMember,
  gmailSecondMember,
  gmailThirdMember,
  collegeFirstMember,
  collegeSecondMember,
  collegeThirdMember,
  phoneFirstMember,
  phoneSecondMember,
  phoneThirdMember,
  setRegister,
  group,
  firstMemberInfo,
  secondMemberInfo,
  thirdMemberInfo,
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
    const gmailFirstMemberTrim = gmailFirstMember.trim();
    const gmailSecondMemberTrim = gmailSecondMember.trim();
    const gmailThirdMemberTrim = gmailThirdMember.trim();
    const firstMemberInfoTrim = firstMemberInfo.trim();
    const secondMemberInfoTrim = secondMemberInfo.trim();
    const thirdMemberInfoTrim = thirdMemberInfo.trim();
    const collegeFirstMemberTrim = collegeFirstMember.trim();
    const collegeSecondMemberTrim = collegeSecondMember.trim();
    const collegeThirdMemberTrim = collegeThirdMember.trim();
    const phoneFirstMemberTrim = phoneFirstMember.trim();
    const phoneSecondMemberTrim = phoneSecondMember.trim();
    const phoneThirdMemberTrim = phoneThirdMember.trim();
    const firstMemberTrim = firstMember.trim().toLowerCase();
    const secondMemberTrim = secondMember.trim().toLowerCase();
    const thirdMemberTrim = thirdMember.trim().toLowerCase();
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
        gmailThirdMember: gmailThirdMemberTrim,
        firstMemberInfo: firstMemberInfoTrim,
        secondMemberInfo: secondMemberInfoTrim,
        thirdMemberInfo: thirdMemberInfoTrim,
        collegeFirstMember: collegeFirstMemberTrim,
        collegeSecondMember: collegeSecondMemberTrim,
        collegeThirdMember: collegeThirdMemberTrim,
        phoneFirstMember: phoneFirstMemberTrim,
        phoneSecondMember: phoneSecondMemberTrim,
        phoneThirdMember: phoneThirdMemberTrim,
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
      "#E52B50:white:This TeamName has already been taken, please enter new TeamName"
    ) {
      return setRegister({
        group: "",
        gmailFirstMember: "",
        gmailSecondMember: "",
        gmailThirdMember: "",
        firstMemberInfo: "",
        secondMemberInfo: "",
        thirdMemberInfo: "",
        collegeFirstMember: "",
        collegeSecondMember: "",
        collegeThirdMember: "",
        phoneFirstMember: "",
        phoneSecondMember: "",
        phoneThirdMember: "",
        firstMember: "",
        secondMember: "",
        thirdMember: "",
        password: "",
      });
    }
    history.push("/");
    setRegister({
      group: "",
      gmailFirstMember: "",
      gmailSecondMember: "",
      gmailThirdMember: "",
      firstMemberInfo: "",
      secondMemberInfo: "",
      thirdMemberInfo: "",
      collegeFirstMember: "",
      collegeSecondMember: "",
      collegeThirdMember: "",
      phoneFirstMember: "",
      phoneSecondMember: "",
      phoneThirdMember: "",
      firstMember: "",
      secondMember: "",
      thirdMember: "",
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
                type="email"
                className="form-control"
                name="gmailThirdMember"
                value={gmailThirdMember}
                onChange={onChange}
                placeholder="Email id of third member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="thirdMember"
                value={thirdMember}
                onChange={onChange}
                placeholder="Name of third member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="collegeThirdMember"
                value={collegeThirdMember}
                onChange={onChange}
                placeholder="college  of third member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="thirdMemberInfo"
                value={thirdMemberInfo}
                onChange={onChange}
                placeholder="class-div-roll no of third member"
              />
            </div>{" "}
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="phoneThirdMember"
                value={phoneThirdMember}
                onChange={onChange}
                placeholder="phone no. of third member"
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
