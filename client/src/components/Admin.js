import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
function Admin() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    const info = await fetch("/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await info.json();
    setUser(res);
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Login</th>
          <th scope="col">Solved</th>
          <th scope="col">Logout</th>
          <th scope="col">Time Taken</th>
        </tr>
      </thead>
      <tbody>
        {user.map((e, index) => {
          const format = [
            moment(`${e.createdAt}`).format("h:mm:ss"),
            moment(`${e.updatedAt}`).format("h:mm:ss"),
          ];
          const time = format.map((e) => {
            const timeString = e;
            const arr = timeString.split(":");
            return arr[0] * 3600 + arr[1] * 60 + +arr[2];
          });
          const diff = Math.abs(parseInt((time[1] - time[0]) / 60));
          return (
            <tr>
              <th scope="row">
                {index + 1}
                </th>
              <td>
                {e.group}
              </td>
              <td>
                {moment(`${e.createdAt}`).format("LTS")}
              </td>
              <td>
                {e.solution.length}/15
              </td>
              <td >
                {moment(`${e.updatedAt}`).format("LTS")}
              </td>
              <td>
                {diff} mins
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Admin;
