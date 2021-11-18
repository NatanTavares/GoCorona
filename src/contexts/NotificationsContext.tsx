import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type NotificationsContextType = {
  emitterErrorNotification: (errorMsg: string) => void;
  emitterWarnNotification: (warnMsg: string) => void;
};

export const NotificationsContext = createContext(
  {} as NotificationsContextType
);

export const NotificationsContextProvider: React.FC = ({ children }) => {
  function emitterErrorNotification(errorMsg: string) {
    toast.error(errorMsg);
  }

  function emitterWarnNotification(warnMsg: string) {
    toast.warn(warnMsg);
  }

  return (
    <NotificationsContext.Provider
      value={{ emitterErrorNotification, emitterWarnNotification }}
    >
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={5000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </NotificationsContext.Provider>
  );
};
