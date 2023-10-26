import { LogEntry } from "../useLog";
import "./Log.css";

const Log = ({ entries }: { entries: LogEntry[] }) => {
  const cleanEntries = entries?.filter((entry) => entry?.message !== undefined);
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Timestamp</td>
            <td>Message</td>
          </tr>
        </thead>
        <tbody>
          {cleanEntries?.map((entry, index) => (
            <tr key={index}>
              <td>{entry?.timestamp.toISOString()}</td>
              <td>{entry?.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Log;
