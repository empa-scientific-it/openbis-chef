import { useList } from "./useList";

export interface LogEntry {
  timestamp: Date;
  message: string;
}


export interface LoggerInterface{
    append: (message: string) => void;
    format: () => string;
    reset: () => void;
    logEntries: () => LogEntry[];
}

export const useLog = () => {
  const messages = useList([{}] as LogEntry[]);

  const append = (message: string) => {
    messages.add({
      timestamp: new Date(),
      message: message,
    });
  };

  const format = () => {
    return messages.list.map((entry) => `[${entry.timestamp}]: ${entry.message}`).join("\n");
  };

  const reset = () => {messages.clear()};

  const logEntries = () => messages.list;

  return { append, format, reset, logEntries };
};
