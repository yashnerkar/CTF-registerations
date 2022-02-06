import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

function Admin() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    const info = await fetch("/site-admin", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const res = await info.json();
    res.map((e) => {
      const timeCreated = moment(`${e.createdAt}`).format("HH:mm:ss");
      // console.log("time created",timeCreated);
      const timeUpdated = moment(`${e.updatedAt}`).format("HH:mm:ss");
      // console.log("time updated",timeUpdated);
      const arr1 = timeCreated.split(":");
      // console.log("arr1",arr1);
      const timeTaken1 = arr1[0] * 3600 + arr1[1] * 60 + arr1[2] * 1;
      // console.log("time taken1",timeTaken1);
      const arr2 = timeUpdated.split(":");
      const timeTaken2 = arr2[0] * 3600 + arr2[1] * 60 + arr2[2] * 1;
      // console.log("time taken2",timeTaken2);
      const timeTaken = Math.abs(parseInt((timeTaken2 - timeTaken1) / 60));
      // console.log("time taken",timeTaken);
      return e.timeTaken = timeTaken;
    });

    const sortedResult = res.sort((a, b) => {
      return b.solution.length - a.solution.length || a.timeTaken - b.timeTaken;
    });
    setUser(sortedResult);
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#212529",
      }}
    >
      <table className=" p-0 table table-hover-primary text-light">
        <thead className="text-danger">
          <tr>
            <th scope="col"> # </th>
            <th scope="col"> Name </th> 
            <th scope="col"> Login </th>
            <th scope="col"> Solved </th> 
            <th scope="col"> Logout </th>
            <th scope="col"> Time Taken </th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{e.group}</td>
                <td>{moment(`${e.createdAt}`).format("LTS")}</td>
                <td>{e.solution.length}</td>
                <td>{moment(`${e.updatedAt}`).format("LTS")}</td>
                <td>{e.timeTaken}mins</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
