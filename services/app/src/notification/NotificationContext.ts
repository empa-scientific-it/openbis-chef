import { createContext } from "react";
import { NotificationContextValue } from "./hooks/useNotification";

export const NotificationContext = createContext<NotificationContextValue>({
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {}
    });