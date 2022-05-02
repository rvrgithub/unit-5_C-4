import { users, orders } from "../db"
import React, { useState } from "react";
import { sort } from "../Redux/actions";
import {reducer} from "../Redux/reducer"
import "../App.css"


export const Orders = () => {

  //  Get all data when admin logs in and populate it
  // store it in redux
  const [user, setUser] = useState(users)
  const [order, setOrder] = useState(orders)

  return (
    <div>
      <div>
        <div>
          <select className="controls items" name="progress" id="progress"
          onChange={(e)=>{
            dispatch(sort(e.target.value));
          }}>
            <option value="id"> Sort by ID</option>
            <option value="status"> Sort by Status</option>
            <option value="cost"> Sort by Cost</option>
          </select>
        </div>
        <table className="orders">

          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((e) => (

              <tr className="orders-row">
                <td className="id">{e.id}</td>
                <td className="problem">{e.problem}</td>
                <td className="owner">{e.owner_name}</td>
                <td className="status">{e.brand}</td>
                <td className="cost">{e.cost}</td>
                <td className="change-status">

                  {/* Show select dropdown only if status is Not Accepted */}
                  <select className="changeStatus inputBar" name="changeStatus">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                    <option value="Not Accepted">Not Accepted</option>
                  </select>
                </td>
                <td className="accept">
                  {/* Show this button only if status is Not Accepted */}
                  {/* on change make request to update it in db, and show changed status in table */}
                  <button className="submit">Accept</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
