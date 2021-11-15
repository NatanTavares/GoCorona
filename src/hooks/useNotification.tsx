import { useContext } from "react";
import { NotificationsContext } from "../contexts/NotificationsContext";

export const useNotification = () => useContext(NotificationsContext);
