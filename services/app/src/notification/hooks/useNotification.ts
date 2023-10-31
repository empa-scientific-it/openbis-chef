import { useState } from "react";

export interface Notification {
  id: number;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

export interface NotificationContextValue {
  notifications: Notification[];
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}

export const useNotification = (): NotificationContextValue => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: Notification["type"]) => {
    const id = Date.now();
    const newNotification = { id, message, type };
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = (id: number) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  return { notifications, addNotification, removeNotification };
};
