import React from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

function Register({
  gmailFirstMember,
  gmailSecondMember,
  gmailThirdMember,
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
      <div className="container-fluid  d-flex align-items-center justify-content-center mt-1">
        <div
          id="card"
          className="container col-md-12 col-sm-12 col-12 mt-2 mb-2 py-3 px-5"
          style={{ maxWidth: "580px" }}
        >
          <p className="text-light text-center form-banner pt-2">
            CTF Registeration Form{" "}
          </p>{" "}
          <form id="registeredForm" onSubmit={getData}>
            <div className="form-group mt-2">
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
            <div className="form-group mt-2">
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
            <div className="form-group mt-1">
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
            <div className="form-group mt-1">
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
            <div className="form-group mt-1">
              <input
                type="email"
                className="form-control"
                name="gmailSecondMember"
                value={gmailSecondMember}
                onChange={onChange}

                placeholder="Email id of second member"
              />
            </div>{" "}
            <div className="form-group mt-1">
              <input
                type="text"
                className="form-control"
                name="secondMember"
                value={secondMember}
                onChange={onChange}

                placeholder="Name of second member"
              />
            </div>{" "}
            <div className="form-group mt-1">
              <input
                type="text"
                className="form-control"
                name="secondMemberInfo"
                value={secondMemberInfo}
                onChange={onChange}

                placeholder="class-div-roll no of second member"
              />
            </div>{" "}
            <div className="form-group mt-1">
              <input
                type="email"
                className="form-control"
                name="gmailThirdMember"
                value={gmailThirdMember}
                onChange={onChange}

                placeholder="Email id of third member"
              />
            </div>{" "}
            <div className="form-group mt-1">
              <input
                type="text"
                className="form-control"
                name="thirdMember"
                value={thirdMember}
                onChange={onChange}

                placeholder="Name of third member"
              />
            </div>{" "}
            <div className="form-group mt-1">
              <input
                type="text"
                className="form-control"
                name="thirdMemberInfo"
                value={thirdMemberInfo}
                onChange={onChange}

                placeholder="class-div-roll no of third member"
              />
            </div>{" "}
           
           
          
            <div className="form-group mt-1">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
            </div>{" "}
            <div className="form-group text-center mt-1">
              <button type="submit" className="close buttons">
                SUBMIT{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Register;
