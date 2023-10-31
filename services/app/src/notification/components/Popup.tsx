import React, { useContext, useEffect } from "react";
import { NotificationContext } from "@src/notification/NotificationContext";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { cons } from "fp-ts/lib/ReadonlyNonEmptyArray";

const Popup = ({ timeout = 2000 }: { timeout: number }) => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  useEffect(() => {
    if(notifications.length === 0) return;
    const timer = setTimeout(() => {
      removeNotification(notifications.pop()?.id);
    }, timeout);
    console.log(notifications);
    return () => clearTimeout(timer);
  }, [notifications]);

  return notifications.length > 0 ? (
    <ToastContainer>
      {notifications.map((notification) => (
        <Toast
          key={notification.id}
          onClose={() => removeNotification(notification.id)}
          show={true}
          delay={timeout}
          autohide
        >
          <Toast.Header>{notification.type}</Toast.Header>
          <Toast.Body>{notification.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  ) : null;
};

export default Popup;
