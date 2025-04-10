import { useState } from "react";
import { NotificationContext } from "../contexts";
import { Notification, NotificationContextType } from "../types";

const initNotifications: Notification[] = [
  { id: 1, message: "첫번째 Noti", type: "info" },
];

export const NotificationProvider = ({ children }: React.PropsWithChildren) => {
  const [notifications, setNotifications] =
    useState<NotificationContextType["notifications"]>(initNotifications);

  const addNotification: NotificationContextType["addNotification"] = (
    message,
    type: Notification["type"],
  ) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications((prev) => [...prev, newNotification]);
  };

  const removeNotification: NotificationContextType["removeNotification"] = (
    id,
  ) => {
    setNotifications((prev) => prev.filter((noti) => noti.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
