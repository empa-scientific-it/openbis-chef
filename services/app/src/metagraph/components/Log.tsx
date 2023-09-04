import React, { useState, useContext } from "react";
import { LogEntry } from "../useLog";
import "./Log.css"

const Log = ({ entries }: { entries: LogEntry[] }) => {
  const cleanEntries = entries?.filter((entry) => entry?.message !== undefined);
  return (
    <div className="table-container">
    <table className="log">
      {cleanEntries?.map((entry) => (
        <tr>
          <td>{entry?.timestamp.toISOString()}</td>
          <td>{entry?.message}</td>
        </tr>
      ))}
    </table>
    </div>
  );
};

export default Log;
