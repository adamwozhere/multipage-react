import React from 'react';
import { useState } from 'react';

const Dashboard = () => {
  const [status, setStatus] = useState();

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <h2>
          React cat is <span>{status}</span>
        </h2>
        <img src="images/react-cat.png" alt="scared cat" />
        <div>
          <label htmlFor="status-select">How are you feeling?</label>
          <select
            name="status-select"
            id="status-select"
            defaultValue="scared"
            onChange={statusHandler}
          >
            <option value="scared">Scared</option>
            <option value="bewildered">Bewildered</option>
            <option value="terrified">Terrified</option>
            <option value="suprised">Suprised</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
