import { useList } from "./useList";

interface LogEntry {
  timestamp: Date;
  message: string;
}


export interface LoggerInterface{
    append: (message: string) => void;
    format: () => string;
    reset: () => void;
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

  return { append, format, reset };
};
